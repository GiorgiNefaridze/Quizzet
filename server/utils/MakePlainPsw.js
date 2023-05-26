import { compare } from "bcrypt";

export const makePlainPsw = async (plainPsw, hashPsw) => {
  if (!hashPsw?.length) {
    return false;
  }

  const plain = await compare(plainPsw, hashPsw);

  return plain;
};
