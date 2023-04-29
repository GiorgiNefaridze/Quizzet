import { FC, useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

import { IUserData } from "../../hooks/useGetUsersData";
import { useGetUsersData } from "../../hooks/useGetUsersData";

import MaleProfile from "../../../public/male-icon.png";
import FemaleProfile from "../../../public/female-icon.png";
import {
  LeaderBoardWrapper,
  TopLeaderBoard,
  TopPLayer,
  PlayerList,
  Player,
} from "./LeaderBoard.style";

const LeaderBoard: FC = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  const { getUsersData } = useGetUsersData();

  useEffect(() => {
    (async () => {
      const data = await getUsersData();

      if (!data?.length) {
        return;
      }

      console.log(data);

      setUsers(data);
    })();
  }, []);

  return (
    <LeaderBoardWrapper>
      <TopLeaderBoard>
        {users?.map(({ ismale, name, score, id }: IUserData, idx) => {
          if (idx > 2) {
            return;
          }

          return (
            <TopPLayer score={score.toString()} key={id}>
              <img
                src={ismale ? MaleProfile : FemaleProfile}
                alt="profile"
                title={name}
              />
              <p>{name}</p>
            </TopPLayer>
          );
        })}
      </TopLeaderBoard>
      <PlayerList>
        {users?.map(({ id, ismale, name, score }: IUserData, idx) => {
          if (idx < 2) {
            return;
          }

          return (
            <Player key={id}>
              <div>
                <h1>{idx + 1}</h1>
                <img
                  src={ismale ? MaleProfile : FemaleProfile}
                  alt="profile"
                  title={name}
                />
                <p>{name}</p>
              </div>
              <span>{score}</span>
            </Player>
          );
        })}
      </PlayerList>
      <Button colorScheme="teal" variant="outline">
        Start Game
      </Button>
    </LeaderBoardWrapper>
  );
};

export default LeaderBoard;
