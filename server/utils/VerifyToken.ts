import dotenv from "dotenv";
import { JwtPayload, verify } from "jsonwebtoken";

dotenv.config();

export const verifyToken = (header: string) => {
  if (!header?.length) {
    return;
  }

  const secret = process.env.JWT_SECRET as string;

  const plainToken = header.slice(7);
  const data = verify(plainToken, secret) as JwtPayload;

  return data.id as string;
};
