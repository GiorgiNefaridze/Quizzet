import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  Stack,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

import Quizzet from "../../../public/quizzet.png";
import { AuthContext } from "../../context/AuthContext";
import { handleSignOut } from "../../utils/SignOut";

import { NavWrapper } from "./Nav.style";

interface IProps {
  content: string;
}

const Nav: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = AuthContext();

  return (
    <NavWrapper>
      <img
        onClick={() => navigate("/")}
        src={Quizzet}
        alt="Quizzet"
        title="Quizzet"
      />
      {!isAuth?.status && (
        <ButtonGroup variant="outline" spacing="6">
          <NavButton content="Sign In" />
          <NavButton content="Register" />
        </ButtonGroup>
      )}

      {isAuth?.status && (
        <ButtonGroup variant="outline" spacing="6">
          <Stack direction="row">
            <Avatar
              style={{ width: "2.1em", height: "2.1em", cursor: "pointer" }}
            >
              <AvatarBadge boxSize="1.20em" bg="green.500" />
            </Avatar>
          </Stack>
          <NavButton content="Sign out" />
        </ButtonGroup>
      )}
    </NavWrapper>
  );
};

const NavButton = ({ content }: IProps) => {
  const navigate = useNavigate();
  const { setIsAuth } = AuthContext();

  const handleClick = () => {
    if (content === "Sign In") {
      navigate("/signin");
    } else if (content === "Sign out") {
      handleSignOut();
    } else {
      navigate("/register");
    }
  };

  return <Button onClick={handleClick}>{content}</Button>;
};

export default Nav;
