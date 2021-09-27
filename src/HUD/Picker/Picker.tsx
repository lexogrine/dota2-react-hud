import React from 'react';
import { Draft, Faction, TeamDraft } from 'dotagsi';
import PlayerPick, { PlayerBan } from './Pick';

const TeamPicker = ({ draft, type, active }: { draft?: TeamDraft, type: Faction, active: boolean }) => {
    if (!draft) {
        return <div className="team_draft">
            <div className={`players_draft ${type}`}>

            </div>
            <div className="team_draft_info">

            </div>
        </div>
    }
    const picks = draft.picks.filter(pick => pick.type === 'pick').sort((a, b) => a.order - b.order);
    const smallestNotPickedOrder = Math.min(...picks.filter(entry => !entry.class).map(entry => entry.order));
    return <div className="team_draft">
        <div className={`players_draft ${type}`}>
            {
                picks.map(pick => <PlayerPick entry={pick} type={type} active={active && smallestNotPickedOrder === pick.order} />)
            }
        </div>
        <div className="team_draft_info">

        </div>
    </div>
}

export const TeamBaner = ({ draft, type, active }: { draft?: TeamDraft, type: Faction, active: boolean }) => {
    if (!draft) {

        return <div className={`team_draft_ban ${type}`}>
            <div className={`players_draft_ban ${type}`}>
            </div>
        </div>
    }
    const picks = draft.picks.filter(pick => pick.type === 'ban').sort((a, b) => a.order - b.order);
    const smallestNotPickedOrder = Math.min(...picks.filter(entry => !entry.class).map(entry => entry.order));
    return <div className={`team_draft_ban ${type}`}>
        <div className={`players_draft_ban ${type}`}>
            {
                picks.map(pick => <PlayerBan entry={pick} type={type} active={active && smallestNotPickedOrder === pick.order} />)
            }
        </div>
    </div>
}

export default TeamPicker;