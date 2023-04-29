import { FC } from "react";

import LeaderBoard from "../leaderBoard/LeaderBoard";

import Leaderboard from "../../../public/leaderboard.svg";

import { HomeWrapper } from "./Home.style";

const Home: FC = () => {
  return (
    <HomeWrapper>
      <img src={Leaderboard} />
      <LeaderBoard />
    </HomeWrapper>
  );
};

export default Home;
