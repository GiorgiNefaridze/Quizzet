import { FC, useState, useEffect, MouseEvent, useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { IUserData } from "../../hooks/useGetUsersData";
import { useGetUsersData } from "../../hooks/useGetUsersData";

import { LeaderBoardWrapper } from "./LeaderBoard.style";

const DashBoard: FC = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  const { getUsersData } = useGetUsersData();
  const [animationParent] = useAutoAnimate();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getUsersData();

      if (!data?.length) {
        return;
      }

      setUsers(data);
    })();
  }, []);

  return (
    <LeaderBoardWrapper>
      <main>
        <div id="header">
          <h1>TOP 5</h1>
        </div>
        <div id="leaderboard">
          <div className="ribbon"></div>
          <table ref={animationParent}>
            {users?.map((data: IUserData, idx) => {
              const { id, name, score } = data;

              if (idx > 4) {
                return;
              }
              return (
                <tr key={id}>
                  <td className="number">{idx + 1}</td>
                  <td className="name">{name}</td>
                  <td className="points">
                    {score}
                    {idx === 0 && (
                      <img
                        className="gold-medal"
                        src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                        alt="gold medal"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </main>
      <Button
        colorScheme="red"
        variant="outline"
        style={{ letterSpacing: "2px" }}
        onClick={() => navigate("/quiz")}
      >
        Start Quiz!
      </Button>
    </LeaderBoardWrapper>
  );
};

export default DashBoard;
