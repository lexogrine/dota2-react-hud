import React from "react";
import * as I from "dotagsi";
import { Match } from "../../api/interfaces";

interface Props {
  map: I.Map;
  match: Match | null;
}

export default class SeriesBox extends React.Component<Props> {
  render() {
    const { match, map } = this.props;
    const amountOfMaps = (match && Math.floor(Number(match.matchType.substr(-1)) / 2) + 1) || 0;
    const bo = (match && Number(match.matchType.substr(-1))) || 0;
    const left = map.radiant;
    const right = map.dire;
    return (
      <div id="encapsulator">
        <div className="container left">
          <div className={`series_wins left `}>
            <div className={`wins_box_container`}>
              {new Array(amountOfMaps).fill(0).map((_, i) => (
                <div key={i} className={`wins_box ${left.map_score > i ? "win" : ""} radiant`} />
              ))}
            </div>
          </div>
        </div>
        <div id="series_container">
          <div id="series_text">{ bo ? `BEST OF ${bo}` : '' }</div>
        </div>
        <div className="container right">
          <div className={`series_wins right `}>
            <div className={`wins_box_container`}>
              {new Array(amountOfMaps).fill(0).map((_, i) => (
                <div key={i} className={`wins_box ${right.map_score > i ? "win" : ""} dire`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
