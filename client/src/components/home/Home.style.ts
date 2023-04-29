import styled from "styled-components";

import { BG_COLOR } from "../../CONSTANTS";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BG_COLOR};

  img {
    width: 45%;
    height: 65%;
  }
`;
