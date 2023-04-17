import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@chakra-ui/react";

import Quizzet from "../../../public/quizzet.png";
import { NavWrapper } from "./Nav.style";

interface IProps {
  content: string;
}

const Nav: FC = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <img
        onClick={() => navigate("/")}
        src={Quizzet}
        alt="Quizzet"
        title="Quizzet"
      />
      <ButtonGroup variant="outline" spacing="6">
        <NavButton content="Sign In" />
        <NavButton content="Register" />
      </ButtonGroup>
    </NavWrapper>
  );
};

const NavButton = ({ content }: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (content === "Sign In") {
      navigate("/signin");
    } else {
      navigate("/register");
    }
  };

  return <Button onClick={handleClick}>{content}</Button>;
};

export default Nav;
