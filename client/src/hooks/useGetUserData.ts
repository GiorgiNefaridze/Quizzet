import { BaseURL } from "../api/BaseURL";

export const useGetUserData = () => {
  const getUserData = async () => {
    const user = await BaseURL().get("/api/user");

    return user?.data?.response;
  };

  return { getUserData };
};
