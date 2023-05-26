import dotenv from "dotenv";
import { verify } from "jsonwebtoken";

dotenv.config();

export const verifyToken = (header) => {
  if (!header?.length) {
    return;
  }

  const secret = process.env.JWT_SECRET;

  const plainToken = header.slice(7);
  const data = verify(plainToken, secret);

  return data.id;
};
