import { Dispatch, SetStateAction } from "react";

export interface IProps {
  active?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
