import { FC } from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";

import Quizzet from "../../../public/quizzet.png";
import { NavWrapper } from "./Nav.style";

const Nav: FC = () => {
  return (
    <NavWrapper>
      <img src={Quizzet} alt="Quizzet" title="Quizzet" />
      <ButtonGroup variant="outline" spacing="6">
        <Button>Sign In</Button>
        <Button>Register</Button>
      </ButtonGroup>
    </NavWrapper>
  );
};

export default Nav;
