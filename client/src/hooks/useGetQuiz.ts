import { useState } from "react";
import axios from "axios";

export const useGetQuiz = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getQuiz = async () => {
    setLoading(true);
    try {
      const { data } = await axios(import.meta.env.VITE_Quiz_URL);
      setLoading(false);
      return data;
    } catch (error) {}
  };

  return { getQuiz, loading };
};
