import React from "react";
import GameItem from "../game-item/game-item.component";
import "./game-list.styles.scss";

const GameList = ({ games }) => {
  return (
    <div className="game_list">
      <h1>Games</h1>
      <div className="game_list_container">
        {games.map((item, index) => (
          <GameItem
            key={index}
            imageUrl={item.url}
            gameGenre={item.gameGenre}
            gameName={item.gameName}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;
