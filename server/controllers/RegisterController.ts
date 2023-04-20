import { IControllerProps } from "./Types";
import { MakehashedPsw } from "../utils/MakehashedPsw";
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
      throw new Error("User already exists 🤐");
    }

    const hashedPsw = await MakehashedPsw(password);

    const user = await pool.query(
      `INSERT INTO ${process.env.USER_TABLE} (name, email, password) VALUES ($1,$2, $3) RETURNING *`,
      [name, email, hashedPsw]
    );

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({ response: "User created successfully 🫦" });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
