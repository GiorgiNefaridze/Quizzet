import { useState, createContext, useContext, useEffect } from "react";

import { useGetUserData } from "../hooks/useGetUserData";
import { IContext, IContextProvider, IIsAuth } from "./Types";

export const auth = createContext<IContext>({} as IContext);

export const AuthContext = () => {
  return useContext(auth);
};

export const AuthContextProvider = ({ children }: IContextProvider) => {
  const [isAuth, setIsAuth] = useState<IIsAuth>({
    status: false,
    name: "",
    email: "",
  });

  const { getUserData } = useGetUserData();

  useEffect(() => {
    (async () => {
      try {
        const user = await getUserData();

        if (Object.keys(user).length > 1) {
          setIsAuth({ status: true, name: user?.name, email: user?.email });
        } else {
        }
      } catch (error) {
        setIsAuth({ status: false, name: "", email: "" });
      }
    })();
  }, []);

  return (
    <auth.Provider value={{ isAuth, setIsAuth }}>{children}</auth.Provider>
  );
};
