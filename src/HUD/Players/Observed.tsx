import { Player } from "dotagsi";
import React from "react";
import Ability from "../Ability";
import CameraContainer from "../Camera/Container";
import "./observed.scss";


export default class Observed extends React.Component<{ player: Player | null }> {
	render() {
		const { player } = this.props;
		if (!player || !player.hero) return null;;
		return (
			<div className={`observed`}>
				{
					player.hero.name ? <div className="main_row">

						<div className={`avatar`}>
							<img src={`./heroes/${player.hero.name.replace('npc_dota_hero_', '')}.png`} width={140} alt={'Avatar'} />


						</div>
						<div className="username_container">
							<div className="username">[{player.hero.name.replace('npc_dota_hero_', '').toUpperCase()}] {player.name}, level {player.hero.level}</div>
						</div>
						<div className="grenade_container">
						</div>
					</div> : null
				}

				<div className="stats_row">
					<div className="statistics">
						{
							player.abilities.map((ability: any) => <Ability name={ability.name} level={ability.level} available={ability.level > 0} cooldown={ability.cooldown} />)
						}
					</div>
					<div className="statistics">
						{
							player.items.filter(item => item.type === "slot").map(item => item.name !== "empty" ? <img src={`./items/${item.name.replace('item_', '')}.png`} height={43} /> : null)
						}
					</div>
					<div className="bar-container">
						<div className="health-bar bar" style={{ width: player.hero.max_health ? `${(player.hero.health || 0) * 100 / player.hero.max_health}%` : 0 }}></div>{player.hero.health}/{player.hero.max_health}
					</div>
					<div className="bar-container">
						<div className="mana-bar bar" style={{ width: player.hero.max_mana ? `${(player.hero.mana || 0) * 100 / player.hero.max_mana}%` : 0 }}></div>{player.hero.mana}/{player.hero.max_mana}
					</div>
				</div>
			</div>
		);
	}
}
