import React from "react";
import Slider from "../../components/imageSlider/Slider";
import HomeBody from "../../components/Home-body/Home-body.component";
import GameList from "../../components/game-list/game-list.component";
import { GAMES } from "./games.data";
import { TOURNAMENTS } from "./tournament.data";
import UpcomingTournamentList from "../../components/upcoming-tournaments/upcoming-tournaments-list";
import "./Home.styles.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Slider />
      <GameList games={GAMES} />
      <UpcomingTournamentList tournaments={TOURNAMENTS} />
      <div className="definitions">
        <h1 className="comp_game">Competetive Gaming</h1>
        <p>
          Esports, also known as electronic sports or competitive gaming, refers
          to organised competitive video gaming. It involves professional
          players and teams competing against each other in various video game
          tournaments, often with cash prizes. Here in zufan the average player
          can get involved in any tournament that suits him/her best, the prizes
          are not limited to cash, for people who want to just game and injoy
          their time, there are experience matches and tournaments that we set
          up just for that reason. so injoy your time and gg's
        </p>
        <h1 className="prize">Prizes</h1>
        <p>
          Zufan gaming offers a variety of prizes from cash to pubg currency UC
          and more, you get to choose what you want to play for, and if you want
          to Host a tournament with your freinds then this is the place you can
          Host or Join a match with a prize pool up to 10,000 Birr
        </p>
      </div>
    </div>
  );
};

export default Home;
