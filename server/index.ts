import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import RegisterRoute from "./routes/RegisterRoute";
import SignInRoute from "./routes/SignInRoute";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(json());

app.use("/api/auth/", SignInRoute);
app.use("/api/auth/", RegisterRoute);

app.listen(port, () => {
  console.log(`Server is running at ${port} 🚀`);
});
