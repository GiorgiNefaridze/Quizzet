import { BaseURL } from "../api/BaseURL";
import { IForm } from "../components/signIn/Types";

export const useSignIn = () => {
  const signIn = async (data: IForm) => {
    localStorage.removeItem("token");
    const response = await BaseURL().post("/api/auth/" + "signin", data);

    const token = response?.data?.response;

    if (token.length > 1) {
      localStorage.setItem("token", token);
    }

    return response;
  };

  return { signIn };
};
