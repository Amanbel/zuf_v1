import React from "react";
import "./upcoming-tournaments-list.scss";
import TournamentItem from "../upcoming-tournament-item/upcoming-tournament-item.component";
const UpcomingTournamentList = ({ tournaments }) => {
  return (
    <div className="tourn_list">
      <h1>Upcoming Tournaments</h1>
      <div className="tourn_list_container">
        {tournaments.map((item, index) => (
          <TournamentItem
            key={index}
            imageUrl={item.imageUrl}
            gameGenre={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTournamentList;
