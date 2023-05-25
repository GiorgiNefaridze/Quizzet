import styled from "styled-components";
import { Button } from "@chakra-ui/react";

import { RESPONSIVE_BREAKPOINTS } from "../../CONSTANTS";

interface IProps {
  isError: boolean;
}

export const QuizWrapper = styled.div<IProps | HTMLElement>`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    align-items: flex-start;
  }

  main {
    width: 45%;
    height: auto;
    border-radius: 20px;
    border: 1px solid #e1e1e1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 4rem 3rem 2rem;
    gap: 30px 0;
    opacity: ${({ isError }) => (isError ? 0.5 : 1)};
    position: relative;

    input {
      width: 100%;
    }

    li {
      position: absolute;
      right: 5%;
      top: 5%;
    }

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
      width: 100%;
      border: none;
      padding: 4rem 2rem;
      gap: 10px 0;
    }

    button {
      width: 100%;
      border: 1px solid red;
      border-radius: 10px;

      &:hover {
        background-color: #fff5f5;
      }
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ceneter;
  flex-direction: column;
  gap: 1rem 0;
  flex-wrap: wrap;

  button {
    padding: 15px 20px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBack = styled(Button)`
  position: absolute !important;
  bottom: 5% !important;
  left: 2% !important;
`;
