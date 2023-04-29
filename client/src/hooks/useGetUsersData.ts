import { BaseURL } from "../api/BaseURL";

export interface IUserData {
  id: number;
  name: string;
  ismale: boolean;
  score: number;
}

export const useGetUsersData = () => {
  const getUsersData = async () => {
    const { data }: IUserData = await BaseURL().get("/api/user/users");

    return data?.response as IUserData[];
  };

  return { getUsersData };
};
