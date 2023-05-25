import { Dispatch, SetStateAction, ReactNode } from "react";

export interface IContext {
  isAuth: IIsAuth;
  setIsAuth: Dispatch<SetStateAction<IIsAuth>>;
}

export interface IContextProvider {
  children: ReactNode;
}

export interface IIsAuth {
  status: boolean;
  name: string;
  email: string;
}
