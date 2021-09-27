import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import TopSideBar from './TopSideBar';

const Statistics = ({ player, type, teamId, show}: { player: Player | null, type: Faction, teamId: string, show: boolean}) => {
    if (!player) {

        return <TopSideBar type={type} teamId={teamId} show={show}>
            
        </TopSideBar>
    }
    const { gpm, xpm, kills, deaths, assists } = player;
    return <TopSideBar type={type} teamId={teamId} show={show}>
        <div className="gpm_xpm_container">
            GPM <strong className="shadowed-text">{gpm}</strong> / XPM <strong className="shadowed-text">{xpm}</strong>
        </div>
        <div className="attack">
            <strong className="shadowed-text">{player.last_hits}</strong>&nbsp;/&nbsp;<strong className="shadowed-text">{player.denies}</strong>
        </div>
        <div className="kda">
            KDA <strong className="shadowed-text">{kills}</strong> / <strong className="shadowed-text">{deaths}</strong> / <strong className="shadowed-text">{assists}</strong>
        </div>
    </TopSideBar>
}

export default Statistics;