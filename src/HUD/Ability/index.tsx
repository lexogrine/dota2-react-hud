import React from 'react';
import './abilities.scss';
import { getAssetURL } from '../../api/api';

const Ability = ({ name, cooldown, available, level } : { name: string, cooldown: number, available: boolean, level: number | string }) => {
    if(name.startsWith("plus_")) return null;
    return (
        <div className={`skill-container ${cooldown ? 'cooldown':''} ${!available ? 'unavailable':''}`} style={{backgroundImage: `url('${getAssetURL(name, 'abilities')}')`}}>
            { cooldown ? <div className="cooldown-container">{cooldown}</div> : null}
            <div className="level-container">{level}</div>
        </div>
    )
}

export default Ability;