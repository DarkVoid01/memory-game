import React from "react";
import Score from "../Score/Score";
import "./GameOver.css"
const Gameover = ( {click}) => {
  return (
    <div title="Click anywhere to close" onClick={ click} className="GameOverContainer">
      <div className="GameOver">
        <div>
          <h2>Game over!</h2>
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Gameover;
