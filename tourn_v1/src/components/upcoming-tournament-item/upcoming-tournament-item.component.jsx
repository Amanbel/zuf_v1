import React from "react";
import "./upcoming-tournament-item.styles.scss";

function TournamentItem({ imageUrl, gameGenre }) {
  return (
    <div className="tourn_item_container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="tourn_item_footer">
        <span className="game_name">Cod: Mobile</span>
        <span className="tourn_class">Amature</span>
        <span className="tourn_desc">{gameGenre}</span>
      </div>
    </div>
  );
}

export default TournamentItem;
