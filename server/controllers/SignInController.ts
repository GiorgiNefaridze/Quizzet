import { IControllerProps } from "./Types";
import { pool } from "../db/DbConnection";
import { makePlainPsw } from "../utils/MakePlainPsw";
import { createToken } from "../utils/CreateToken";

export const SignInController: IControllerProps = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.length || !password?.length) {
      throw new Error("All fields are required");
    }

    const user = await pool.query(
      `SELECT * FROM ${process.env.USER_TABLE} WHERE email = $1`,
      [email]
    );

    const userPsw = user.rows?.[0];

    const plainPsw = await makePlainPsw(password, userPsw?.password ?? "");

    if (user.rows?.length < 1 || !plainPsw) {
      throw new Error("Wrong credentials");
    }

    const token = createToken({ id: user.rows?.[0]?.id });

    if (!token) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({ response: token });
  } catch (error:any) {
    res.status(500).json({ error: error?.message });
  }
};
