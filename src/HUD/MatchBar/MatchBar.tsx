import React from "react";
import * as I from "dotagsi";
import "./matchbar.scss";
import TeamScore from "./TeamScore";
import { Match } from "../../api/interfaces";

function stringToClock(time: string | number, pad = true) {
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

interface IProps {
  match: Match | null;
  map: I.Map;
  players: I.Player[];
  time: number;
}


export default class TeamBox extends React.Component<IProps> {
  render() {
    const { match, map, players, time } = this.props;
    const left = map.radiant;
    const right = map.dire;
    const bo = (match && Number(match.matchType.substr(-1))) || 0;

    const leftScore = players.filter(player => player.team_name === 'dire').map(player => player.deaths).reduce((a, b) => a + b, 0);
    const rightScore = players.filter(player => player.team_name === 'radiant').map(player => player.deaths).reduce((a, b) => a + b, 0);

    return (
      <>
        <div id={`matchbar`}>
          <TeamScore team={left} orientation={"left"} type={'radiant'} />
          <div className={`score left radiant`}>{leftScore}</div>
          <div id="timer" className={bo === 0 ? 'no-bo' : ''}>
            <div id={`round_timer_text`}>{stringToClock(time)}</div>
            </div>
          <div className={`score right dire`}>{rightScore}</div>
          <TeamScore team={right} orientation={"right"} type={'dire'} />
        </div>
      </>
    );
  }
}
