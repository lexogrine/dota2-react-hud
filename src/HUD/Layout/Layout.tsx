import React from "react";
import Observed from "./../Players/Observed";




interface Props {
  game: any,
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
