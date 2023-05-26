import dotenv from "dotenv";

import { pool } from "../db/DbConnection.js";
import { verifyToken } from "../utils/VerifyToken.js";

dotenv.config();

export const GetUserController = async (req, res) => {
  try {
    const header = req.headers["authorization"];

    const id = verifyToken(header);

    const user = await pool.query(
      `SELECT name,email FROM ${process.env.USER_TABLE} WHERE id = $1`,
      [id]
    );

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({ response: user.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
