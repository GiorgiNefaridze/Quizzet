import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createToken = (data) => {
  const secret = process.env.JWT_SECRET;

  if (secret) {
    return jwt.sign(data, secret);
  } else {
    return null;
  }
};
