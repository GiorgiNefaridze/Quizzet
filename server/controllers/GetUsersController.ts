import dotenv from "dotenv";

import { pool } from "../db/DbConnection";
import { IControllerProps } from "./Types";

dotenv.config();

export const GetUsersController: IControllerProps = async (req, res) => {
  try {
    const users = await pool.query(
      `SELECT name,ismale,score,id FROM ${process.env.USER_TABLE} ORDER BY score DESC`
    );

    if (!users?.rows?.length) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({ response: users?.rows });
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
};
