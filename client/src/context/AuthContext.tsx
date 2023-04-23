import { useState, createContext, useContext, useEffect } from "react";

import { useGetUserData } from "../hooks/useGetUserData";
import { IContext, IContextProvider } from "./Types";

export const auth = createContext<IContext>({} as IContext);

export const AuthContext = () => {
  return useContext(auth);
};

export const AuthContextProvider = ({ children }: IContextProvider) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const { getUserData } = useGetUserData();

  useEffect(() => {
    (async () => {
      const user = await getUserData();
    })();
  }, []);

  return (
    <auth.Provider value={{ isAuth, setIsAuth }}>{children}</auth.Provider>
  );
};
