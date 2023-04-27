import { AuthContext } from "../context/AuthContext";

export const handleSignOut = () => {
  const { setIsAuth } = AuthContext();

  setIsAuth({ status: false, email: "", name: "" });
  localStorage.removeItem("token");
};
