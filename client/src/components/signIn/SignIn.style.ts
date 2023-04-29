import styled from "styled-components";

import { BG_COLOR } from "../../CONSTANTS";

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BG_COLOR};
  gap: 0 5%;

  img {
    width: 30%;
  }

  form {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px 0;
    font-family: "Roboto", sans-serif;

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
