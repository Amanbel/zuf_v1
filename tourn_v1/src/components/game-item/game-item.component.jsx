import React from "react";
import "./game-item.styles.scss";

function GameItem({ imageUrl, gameName, gameGenre }) {
  return (
    <div className="game_item_container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="game_item_footer">
        <h2 className="name">{gameName}</h2>
        <h2 className="genre">{gameGenre}</h2>
      </div>
    </div>
  );
}

export default GameItem;
