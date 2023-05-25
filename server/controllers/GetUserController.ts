import dotenv from "dotenv";

import { pool } from "../db/DbConnection";
import { verifyToken } from "../utils/VerifyToken";
import { IControllerProps } from "./Types";

dotenv.config();

export const GetUserController: IControllerProps = async (req, res) => {
  try {
    const header = req.headers["authorization"] as string;

    const id = verifyToken(header);

    const user = await pool.query(
      `SELECT name,email FROM ${process.env.USER_TABLE} WHERE id = $1`,
      [id]
    );

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({ response: user.rows[0] });
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
};
