import { compare } from "bcrypt";

interface IProps {
  (plainPsw: string, hashPsw: string): Promise<boolean>;
}

export const makePlainPsw: IProps = async (plainPsw, hashPsw) => {
  if (!hashPsw?.length) {
    return false;
  }

  const plain = await compare(plainPsw, hashPsw);

  return plain;
};
