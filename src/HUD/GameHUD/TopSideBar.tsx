import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import { apiUrl } from '../../api/api';

const TopSideBar = ({ children, type, teamId, show }: { children: any, type: Faction, teamId: string, show: boolean }) => {
    return <div className={`top_side_bar ${type === 'radiant' ? 'left':'right'} ${!show ? 'hide':''}`}>
        {type === 'radiant' ? (
        <div className="logo_and_type">
        <div className={`type_color ${type}`}>

        </div>
            <img src={`${apiUrl}api/teams/logo/${teamId}`}/>
        </div>
        ) : null}
        {children}
        {type === 'dire' ? (
        <div className="logo_and_type">
        <div className={`type_color ${type}`}>

        </div>
            <img src={`${apiUrl}api/teams/logo/${teamId}`}/>
        </div>
        ) : null}
    </div>
}

export default TopSideBar;