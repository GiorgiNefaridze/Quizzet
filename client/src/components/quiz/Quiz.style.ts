import styled from "styled-components";

interface IProps {
  isError: boolean;
}

export const QuizWrapper = styled.div<IProps | HTMLElement>`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 45%;
    height: 60%;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #e1e1e1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 4.5rem;
    gap: 30px 0;
    opacity: ${({ isError }) => (isError ? 0.5 : 1)};

    input {
      width: 100%;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    padding: 15px 20px;
  }
`;
