import { FC } from "react";

import { NavButton } from "../nav/Nav";
import { AuthContext } from "../../context/AuthContext";
import { IProps } from "./Types";

import { MenuWrapper, ButtonsGroup } from "./Menu.style";

const Menu: FC<IProps> = ({ setActive }) => {
  const { isAuth } = AuthContext();

  return (
    <MenuWrapper>
      {!isAuth?.status && (
        <ButtonsGroup variant="outline" spacing="6">
          <NavButton content="Sign In" setActive={setActive} />
          <NavButton content="Register" setActive={setActive} />
        </ButtonsGroup>
      )}
    </MenuWrapper>
  );
};

export default Menu;
