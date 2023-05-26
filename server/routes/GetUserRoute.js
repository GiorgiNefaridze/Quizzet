import { Router } from "express";

import { GetUserController } from "../controllers/GetUserController.js";
import { GetUsersController } from "../controllers/GetUsersController.js";
import { UpdateUserController } from "../controllers/UpdateUserConrtroller.js";

const router = Router();

router.get("/", GetUserController);

router.get("/users", GetUsersController);

router.post("/", UpdateUserController);

export default router;
