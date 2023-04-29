import styled from "styled-components";

import { BG_COLOR } from "../../CONSTANTS";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${BG_COLOR};
  padding-inline: 5em;

  img {
    width: 10%;
    cursor: pointer;
  }
`;
