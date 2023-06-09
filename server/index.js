import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import RegisterRoute from "./routes/RegisterRoute.js";
import SignInRoute from "./routes/SignInRoute.js";
import GetUserRoute from "./routes/GetUserRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(json());

app.use("/api/auth/", SignInRoute);
app.use("/api/auth/", RegisterRoute);
app.use("/api/user/", GetUserRoute);

app.listen(port, () => {
  console.log(`Server is running at ${port} 🚀`);
});
