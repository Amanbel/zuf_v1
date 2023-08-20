import React from "react";
import GameList from "../game-list/game-list.component";
import { GAMES } from "./games.data";

const HomeBody = () => {
  return (
    <div className="home_body_container">
      <h1>Games</h1>
      <GameList games={GAMES} />
    </div>
  );
};

export default HomeBody;
