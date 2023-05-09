import axios from "axios";

export const useGetQuiz = () => {
  const getQuiz = async () => {
    try {
      const { data } = await axios(import.meta.env.VITE_Quiz_URL);
      return data;
    } catch (error) {}
  };

  return { getQuiz };
};
