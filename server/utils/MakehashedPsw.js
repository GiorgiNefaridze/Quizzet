import { genSalt, hash } from "bcrypt";

export const MakehashedPsw = async (plailPsw) => {
  const salt = await genSalt(Number(process.env.SALT));
  const hashedPsw = await hash(plailPsw, salt);

  return hashedPsw;
};
