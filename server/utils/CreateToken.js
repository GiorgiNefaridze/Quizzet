import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createToken = (data) => {
  const secret = process.env.JWT_SECRET;

  if (secret) {
    return sign(data, secret);
  } else {
    return null;
  }
};
