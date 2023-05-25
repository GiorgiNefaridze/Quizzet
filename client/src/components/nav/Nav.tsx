import { FC, useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@chakra-ui/react";

import BurgerMenu from "../burgerMenu/BurgerMenu";
import Menu from "../burgerMenu/Menu";
import { AuthContext } from "../../context/AuthContext";

import Quizzet from "../../../public/quizzet.png";
import { NavWrapper } from "./Nav.style";

interface IProps {
  content: string;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Nav: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const navigate = useNavigate();
  const { isAuth } = AuthContext();

  return (
    <NavWrapper>
      {active && <Menu setActive={setActive} />}
      <img
        onClick={() => navigate("/")}
        src={Quizzet}
        alt="Quizzet"
        title="Quizzet"
      />
      {!isAuth?.status && (
        <ButtonGroup variant="outline" spacing="6">
          <NavButton content="Sign In" setActive={setActive} />
          <NavButton content="Register" setActive={setActive} />
          <BurgerMenu active={active} setActive={setActive} />
        </ButtonGroup>
      )}

      {isAuth?.status && (
        <ButtonGroup variant="outline" spacing="6">
          <NavButton content="Sign out" />
        </ButtonGroup>
      )}
    </NavWrapper>
  );
};

export const NavButton = ({ content, setActive }: IProps) => {
  const navigate = useNavigate();
  const { setIsAuth } = AuthContext();

  const handleClick = () => {
    if (content === "Sign In") {
      navigate("/signin");
    } else if (content === "Sign out") {
      setIsAuth({ status: false, email: "", name: "" });
      localStorage.removeItem("token");
    } else {
      navigate("/register");
    }
    setActive(false);
  };

  return (
    <Button
      aria-details={content == "Sign out" ? "sign-out" : ""}
      colorScheme="red"
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default Nav;
