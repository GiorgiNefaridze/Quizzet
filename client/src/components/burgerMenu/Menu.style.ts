import styled from "styled-components";
import { ButtonGroup } from "@chakra-ui/react";

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100vh !important;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const ButtonsGroup = styled(ButtonGroup)`
  width: 100% !important;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0px;

  button {
    width: 50% !important;
    display: block !important;
    margin: 0 !important;
  }
`;
