import { FC } from "react";

import LeaderBoard from "../dashBoard/LeaderBoard";

import LeaderboardImg from "../../../public/leaderboard.svg";
import { HomeWrapper } from "./Home.style";

const Home: FC = () => {
  return (
    <HomeWrapper>
      <img src={LeaderboardImg} />
      <LeaderBoard />
    </HomeWrapper>
  );
};

export default Home;
