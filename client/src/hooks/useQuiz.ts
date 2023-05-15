import { BaseURL } from "../api/BaseURL";

export const useQuiz = () => {
  const answeringQuiz = async (score: number) => {
    const { data } = await BaseURL().post("/api/user/", { score });
    return data?.response;
  };

  return { answeringQuiz };
};
