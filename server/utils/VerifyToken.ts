import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (header) => {
  if (!header?.length) {
    return;
  }

  const plainToken = header.slice(7);

  const data = verify(plainToken, process.env.JWT_SECRET);
  return data?.id;
};
