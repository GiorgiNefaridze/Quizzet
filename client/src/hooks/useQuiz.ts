import { BaseURL } from "../api/BaseURL";

export const useQuiz = () => {
  const answeringQuiz = async (score: number) => {
    return await BaseURL().post("/api/user/", { score });
  };

  return { answeringQuiz };
};
