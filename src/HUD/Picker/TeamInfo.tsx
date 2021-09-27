import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import { TeamBaner } from './Picker';

const TeamInfo = ({ draft, type, players, team }: { draft: Draft, type: Faction, players: Player[], team: Team, }) => {
    return <div className={`team_info ${type}`}>
        <div className="team_info_score">
            {team.map_score}
        </div>
        <div className="team_squad">
            <div className="top_bar">
                <div className="name">
                    {team.name}
                </div>
                <TeamBaner draft={draft[type]} type={type} active={false}/>
            </div>
            <div className="bottom_bar">
                {players.map(player => player.name).join(' / ')}
            </div>
        </div>
    </div>
}

export default TeamInfo;