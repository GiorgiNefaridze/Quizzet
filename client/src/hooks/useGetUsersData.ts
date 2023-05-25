import { useState } from "react";
import { BaseURL } from "../api/BaseURL";

export interface IUserData {
  id: number;
  name: string;
  ismale: boolean;
  score: number;
}

export const useGetUsersData = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getUsersData = async () => {
    setLoading(true);
    const { data }: IUserData = await BaseURL().get("/api/user/users");
    setLoading(false);

    return data?.response as IUserData[];
  };

  return { getUsersData, loading };
};
