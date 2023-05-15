import { Router } from "express";

import { GetUserController } from "../controllers/GetUserController";
import { GetUsersController } from "../controllers/GetUsersController";
import { UpdateUserConrtroller } from "../controllers/UpdateUserConrtroller";

const router = Router() as Router;

router.get("/", GetUserController);

router.get("/users", GetUsersController);

router.post("/", UpdateUserConrtroller);

export default router;
