import styled from "styled-components";

import { BG_COLOR, RESPONSIVE_BREAKPOINTS } from "../../CONSTANTS";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${BG_COLOR};
  padding-inline: 5em;
  overflow: hidden;

  div {
    button[aria-details="sign-out"] {
      @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
        display: block;
      }
    }

    button {
      @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
        display: none;
      }
    }

    div {
      display: none;

      svg {
        width: 50%;
      }

      @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
        width: 100px;
        display: flex !important;
        justify-content: flex-end;
      }
    }
  }

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    width: 85%;
    padding: 0;
    margin: auto;
  }

  button {
    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    }
  }

  img {
    width: 10%;
    cursor: pointer;
    z-index: 30;

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.large}) {
      width: 23%;
    }

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.small}) {
      width: 30%;
    }
  }
`;
