import React, { useState } from "react";
import Profiles from "./profiles";
import { Leaderboard } from "./database";
import "./leaderboard.css";

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id="1">
          TRPL 2023 A1
        </button>
        <button onClick={handleClick} data-id="2">
          TRPL 2023 A2
        </button>
        <button onClick={handleClick} data-id="0">
          All Class
        </button>
      </div>

      <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
    </div>
  );
}

function between(data) {
  let filter = data.filter((val) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].class === "TRPL 2023 A1") {
        console.log(data[i]);
        return data[i];
      } else if (data[i].class === "TRPL 2023 A2") {
        return val;
      } else if (data[i].class === "All Class") {
        return val;
      } else {
        return null;
      }
    }
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
