import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
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

    div {
      width: 30%;
    }
  }
`;
