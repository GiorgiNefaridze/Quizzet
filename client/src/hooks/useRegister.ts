import { BaseURL } from "../api/BaseURL";
import { IForm } from "../components/register/Types";

export const useRegister = () => {
  const registerFn = async (data: IForm) => {
    const response = await BaseURL().post("/api/auth/" + "register", data);
    return response;
  };

  return { registerFn };
};
