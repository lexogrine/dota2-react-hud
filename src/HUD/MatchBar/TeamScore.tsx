import React from "react";
import * as I from "dotagsi";
import TeamLogo from './TeamLogo';

interface IProps {
  team: I.Team;
  orientation: "left" | "right";
  type: I.Faction
}

export default class TeamScore extends React.Component<IProps> {
  render() {
    const { orientation, team, type } = this.props;
    return (
      <>
        <div className={`team ${orientation} ${type}`}>
          <div className="team-name">{team.name}</div>
          <TeamLogo team={team} />
        </div>
      </>
    );
  }
}
