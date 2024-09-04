import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft, Map } from 'dotagsi';
import RadiantBorder from './radiantBorder.png';
import DireBorder from './direBorder.png';
import "./scoreboard.scss";
import { Match } from '../../api/interfaces';
import { apiUrl, getAssetURL } from '../../api/api';
import { heroFacets } from '../../api/heroFacets';
export function stringToClock(time: string | number, pad = true) {
    if (typeof time === "string") {
        time = parseFloat(time);
    }
    const countdown = Math.abs(Math.ceil(time));
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown - minutes * 60;
    if (pad && seconds < 10) {
        return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
const ScoreboardPlayer = ({ player }: { player: Player }) => {
    const neutralItem = player.items.find(item => item.type === 'neutral');

    const facetIndex = player.hero?.facetIndex;
    const facets = heroFacets[(player.hero?.name || "")] ?? [];
    const facet = facetIndex ? facets[facetIndex] : null;

    if(facet){
        const _facetUrl = getAssetURL(facet.icon, "facets")
    }
    
    return <div className={`player_scoreboard`}>
        <div className="main_panel">
            <div className="player_name shadowed-text">
                <strong>{player.name}</strong>
            </div>
            <div className="player_picture">

                { player.hero && player.hero.name ? <video muted={true} autoPlay={true} loop={true} width="145">

                    <source src={getAssetURL(player.hero.name, 'heroes_animated')}
                        type="video/webm" />


                    Sorry, your browser doesn't support embedded videos.
                </video> : null}
                <div className="level_container">
                    <div className="level_value shadowed-text">{player.hero && player.hero.level || 0}</div>
                </div>
            </div>
            <strong className="shadowed-text kda">{player.kills} / {player.deaths} / {player.assists}</strong>

        </div>
        <div className="panel">
            <strong className="shadowed-text">{player.net_worth} NET WORTH</strong>
        </div>
        <div className="panel">
            <strong className="shadowed-text ">{player.hero_damage}</strong>
        </div>
        <div className="panel">
            <strong className="shadowed-text">{player.gpm}</strong>&nbsp;GPM
        </div>
        <div className="panel">
            <strong className="shadowed-text">{player.xpm}</strong>&nbsp;XPM
        </div>
        <div className="skills">
            {
                player.items.filter(item => item.type === "slot" && item.id < 6).map(item => <div className="item-slot">{item.name !== "empty" ? <img src={getAssetURL(item.name, 'items')} height={57} /> : null}</div>)
            }
        </div>
        { neutralItem ? <div className="neutral-item">
            {neutralItem.name !== "empty" ? <img src={getAssetURL(neutralItem.name, 'items')} height={57} /> : null}
        </div> : null}
    </div>
}

export { ScoreboardPlayer };

const Scoreboard = ({ map, players, match, show }: { players: Player[], match: Match | null, map: Map, show: boolean }) => {
    const leftScore = players.filter(player => player.team_name === 'dire').map(player => player.deaths).reduce((a, b) => a + b, 0);
    const rightScore = players.filter(player => player.team_name === 'radiant').map(player => player.deaths).reduce((a, b) => a + b, 0);
    return <>
        <div className={`top_board ${!show ? 'hide' : ''}`}>
            <div className="team_logo">
                {map.radiant.id && map.radiant.logo ? <img src={`${apiUrl}api/teams/logo/${map.radiant.id}`} /> : null}
            </div>
            {map.radiant.name}
            <div className="score_info">
                <div className="score_container radiant shadowed-text">
                    {map.radiant.map_score || 0}
                </div>
                <div className="match_info">
                    <div className="match_time">
                        {stringToClock(map.clock_time)}
                    </div>
                    <div className="match_score">
                        {leftScore} - {rightScore} | {match && match.matchType}
                    </div>
                </div>
                <div className="score_container dire shadowed-text">
                    {map.dire.map_score || 0}
                </div>
            </div>
            {map.dire.name}
            <div className="team_logo">
                {map.dire.id && map.dire.logo ? <img src={`${apiUrl}api/teams/logo/${map.dire.id}`} /> : null}
            </div>
        </div>
        <div className={`players_scoreboard ${!show ? 'hide' : ''}`}>
            <div>
                {players.filter(player => player.team_name === 'radiant').map(player => <ScoreboardPlayer player={player} />)}
            </div>
            <div>
                {players.filter(player => player.team_name === 'dire').map(player => <ScoreboardPlayer player={player} />)}
            </div>
        </div>
    </>
}

export default Scoreboard;