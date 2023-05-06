import styled from "styled-components";

import { BG_COLOR } from "../../CONSTANTS";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${BG_COLOR};
  padding-inline: 5em;

  img {
    width: 45%;
    height: 65%;
  }
`;
