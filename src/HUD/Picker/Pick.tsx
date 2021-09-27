import React from 'react';
import { Draft, DraftEntry, Faction, TeamDraft } from 'dotagsi';
import Snow from "./snowflake.png";
const PlayerPick = ({ entry, type, active }: { entry: DraftEntry, type: Faction, active: boolean }) => {
    const order = entry.order + 1;
    let lastPart = 'th';
    if (order === 1) {
        lastPart = 'st';
    } else if (order === 2) {
        lastPart = 'nd';
    } else if (order === 3) {
        lastPart = 'rd';
    }
    let text = `${order}${lastPart} PICK`;
    if (!entry.class) {
        text = '';
    }
    if (active) {
        text = 'PICKING...';
    }
    return <div className={`player_draft ${type} ${active ? 'active' : ''}`}>
        <div className="player_preview">
            <div className="background-imgs">
            </div>
            {entry.class ? <video muted={true} autoPlay={true} loop={true} width="123">

                <source src={`./heroes/animated/npc_dota_hero_${entry.class}.webm`}
                    type="video/webm" />


                Sorry, your browser doesn't support embedded videos.
            </video> : null}
        </div>
        <div className={`draft_status ${!text ? 'hidden' : ''}`}>
            {text}
        </div>
    </div>
}

export const PlayerBan = ({ entry, type, active }: { entry: DraftEntry, type: Faction, active: boolean }) => {
    const order = entry.order + 1;

    if (!entry.class) {

        return <div className={`player_ban ${type} ${active ? 'active' : ''}`}>
            <div className="player_preview" style={{backgroundColor:'#0E0018'}}>
            </div>
        </div>
    }

    return <div className={`player_ban ${entry.order} ${type} ${active ? 'active' : ''}`}>
        <div className="player_preview">
            <img src={`./heroes/${entry.class}.png`} />
        </div>
    </div>
}

export default PlayerPick;