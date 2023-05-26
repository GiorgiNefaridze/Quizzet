import { Router } from "express";

import { GetUserController } from "../controllers/GetUserController";
import { GetUsersController } from "../controllers/GetUsersController";
import { UpdateUserController } from "../controllers/UpdateUserConrtroller";

const router = Router();

router.get("/", GetUserController);

router.get("/users", GetUsersController);

router.post("/", UpdateUserController);

export default router;
