import { genSalt, hash } from "bcrypt";

export interface IProps {
  (plailPsw: string): Promise<string>;
}

export const MakehashedPsw: IProps = async (plailPsw) => {
  const salt = await genSalt(Number(process.env.SALT));
  const hashedPsw = await hash(plailPsw, salt);

  return hashedPsw;
};
