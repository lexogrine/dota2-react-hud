import { Dota2 } from "dotagsi";
import React from "react";
import { Match } from "../../api/interfaces";
import MatchBar from "../MatchBar/MatchBar";
import SeriesBox from "../MatchBar/SeriesBox";
import Observed from "./../Players/Observed";




interface Props {
  game: Dota2,
  match: Match | null
}

export default class Layout extends React.Component<Props> {


  componentDidMount() {

  }


  render() {
    const { game, match } = this.props;


    return (
      <div className="layout">
        <MatchBar map={game.map} match={match} time={game.map.clock_time} players={game.players} />
        <SeriesBox map={game.map} match={match} />
        <Observed player={game.player}/>

      </div>
    );
  }
}
