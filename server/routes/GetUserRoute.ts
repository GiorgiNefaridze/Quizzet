import { Router } from "express";

import { GetUserController } from "../controllers/GetUserController";
import { GetUsersController } from "../controllers/GetUsersController";

const router = Router() as Router;

router.get("/", GetUserController);

router.get("/users", GetUsersController);

export default router;
