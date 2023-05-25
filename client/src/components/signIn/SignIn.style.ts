import styled from "styled-components";
import { Stack, Text, InputRightElement } from "@chakra-ui/react";

import { BG_COLOR, RESPONSIVE_BREAKPOINTS } from "../../CONSTANTS";

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BG_COLOR};
  gap: 0 5%;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.extra_large}) {
    justify-content: space-evenly;
  }

  img {
    width: 30%;

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
      display: none;
    }
  }

  form {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px 0;
    font-family: "Roboto", sans-serif;

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.largest}) {
      width: 45%;
    }

    @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
      width: 85%;
    }

    h2 {
      font-size: 2rem;
      font-family: "Kanit", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      color: #cf0023;
      background: linear-gradient(to right, #cf0023 0%, #cf7079 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h3 {
      color: red;
      font-weight: 400;
      font-size: 14px;
    }

    p {
      align-self: flex-start;
    }

    div {
      width: 100%;
    }
  }
`;

export const FormButton = styled(Stack)`
  width: 100%;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    width: auto !important;
  }
`;

export const FormText = styled(Text)`
  width: 100%;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    margin: auto;
    width: auto !important;
  }
`;

export const PasswordInpt = styled(InputRightElement)`
  width: 20% !important;

  @media only screen and (max-width: ${RESPONSIVE_BREAKPOINTS.medium}) {
    right: 2% !important;
  }
`;
