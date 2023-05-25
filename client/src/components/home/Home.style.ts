import styled from "styled-components";

import { BG_COLOR, RESPONSIVE_BREAKPOINTS } from "../../CONSTANTS";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${BG_COLOR};
  padding-inline: 5em;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.large}) {
    padding-inline: 2em;
  }

  img {
    width: 45%;
    height: 65%;

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
      display: none;
    }
  }
`;
