import styled from "styled-components";

interface IProps {
  score: string;
}

export const LeaderBoardWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 4em;
`;

export const TopLeaderBoard = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-transform: capitalize;
`;

export const TopPLayer = styled.div<IProps | HTMLElement>`
  width: 5rem;
  height: 5rem;
  margin-inline: 0.3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:nth-child(1) {
    width: 7em;
    height: 7em;
    order: 2;
  }

  &:nth-child(2) {
    order: 1;
  }

  &:nth-child(3) {
    order: 2;
  }

  &::before {
    content: ${({ score }) => `"${score}"`};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    color: red;
  }
`;

export const PlayerList = styled.main`
  width: 55%;
  height: 60%;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Player = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.2);
  margin-block: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;

  h1 {
    color: white;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0 15px;

    img {
      width: 4em;
      height: 100%;
    }
  }

  span,
  p {
    font-size: 20px;
    color: black;
    font-family: "Kanit", sans-serif;
    text-transform: capitalize;
  }

  &:nth-child(1) {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: All 0.5s ease;
  }
`;
