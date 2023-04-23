import { Dispatch, SetStateAction, ReactNode } from "react";

export interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export interface IContextProvider {
  children: ReactNode;
}
