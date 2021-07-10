import React from "react";
import Ability from "../Ability";
import "./observed.scss";


export default class Observed extends React.Component<{ player: any | null }> {

	render() {
		const { player } = this.props;
		if (!player) return '';
		return (
			<div className={`observed`}>
				<div className="main_row">

					<div className={`avatar`}>

						<img src={`./heroes/${player.hero.name.replace('npc_dota_hero_','')}_full.png`} width={140}alt={'Avatar'} />
						
					</div>
					<div className="username_container">
						<div className="username">[{player.hero.name.replace('npc_dota_hero_','').toUpperCase()}] {player.player.name}, level {player.hero.level}</div>
					</div>
					<div className="grenade_container">
						{/*grenades.map(grenade => <React.Fragment key={`${player.steamid}_${grenade.name}_${grenade.ammo_reserve || 1}`}>
							<Weapon weapon={grenade.name} active={grenade.state === "active"} isGrenade />
							{
								grenade.ammo_reserve === 2 ? <Weapon weapon={grenade.name} active={grenade.state === "active"} isGrenade /> : null}
							</React.Fragment>)*/}
					</div>
				</div>
				<div className="stats_row">
					<div className="statistics">
						{
							player.abilities.map((ability: any) => <Ability name={ability.name} level={ability.level} available={ability.level > 0} cooldown={ability.cooldown}/>)
						}
					</div>
					<div className="statistics">
						{
							player.items.slots.map((item: any) => item.name !== "empty" ? <img src={`./items/${item.name.replace('item_','')}_lg.png`} height={43}/> : null)
						}
					</div>
					<div className="bar-container">
						<div className="health-bar bar" style={{ width: player.hero.max_health ? `${player.hero.health*100/player.hero.max_health}%` : 0}}></div>{player.hero.health}/{player.hero.max_health}
					</div>
					<div className="bar-container">
						<div className="mana-bar bar" style={{ width: player.hero.max_health ? `${player.hero.health*100/player.hero.max_health}%` : 0}}></div>{player.hero.mana}/{player.hero.max_mana}
					</div>
				</div>
			</div>
		);
	}
}
