import { IControllerProps } from "./Types";
import { pool } from "../db/DbConnection";

export const RegisterController: IControllerProps = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.length || !email?.length || !password?.length) {
      throw new Error("All fields are required");
    }

    const checkUser = await pool.query(
      `SELECT email FROM ${process.env.USER_TABLE} WHERE email = $1`,
      [email]
    );

    if (checkUser.rows?.length > 0) {
      throw new Error("User already exists");
    }

    

  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
