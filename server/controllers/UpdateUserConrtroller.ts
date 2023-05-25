import { verifyToken } from "../utils/VerifyToken";
import { pool } from "../db/DbConnection";
import { IControllerProps } from "./Types";

export const UpdateUserController: IControllerProps = async (req, res) => {
  try {
    const { score } = req.body;
    const header = req.headers["authorization"];

    const id = verifyToken(header);

    const findUserScore = await pool.query(
      `SELECT score from ${process.env.USER_TABLE} WHERE id = $1`,
      [id]
    );

    const updateScore = await pool.query(
      `UPDATE ${process.env.USER_TABLE} SET score = $1 WHERE id = $2 RETURNING score`,
      [Number(findUserScore?.rows[0]?.score) + Number(score), id]
    );

    res.status(200).json({ response: updateScore.rows[0]?.score });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};
