import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

import { IProps } from "./Types";

const Rate = ({ difficulty }: IProps) => {
  const [stars, setStars] = useState<number[] | []>([]);

  useEffect(() => {
    setStars(new Array(difficulty).fill(0));
  }, [difficulty]);

  return (
    <div style={{ display: "flex", cursor: "pointer", gap: "0px 1px" }}>
      {stars?.map((_, idx) => {
        return <AiFillStar key={idx} color="orange" />;
      })}
    </div>
  );
};

export default Rate;
