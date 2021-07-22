import { Dota2 } from "dotagsi";
import React from "react";
import Observed from "./../Players/Observed";




interface Props {
  game: Dota2,
}

export default class Layout extends React.Component<Props> {


  componentDidMount() {

  }


  render() {
    const { game } = this.props;


    return (
      <div className="layout">

        <Observed player={game.player}/>

      </div>
    );
  }
}
