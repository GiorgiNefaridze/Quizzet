import { Router } from "express";

import { GetUserController } from "../controllers/GetUserController";

const router = Router() as Router;

router.get("/", GetUserController);

export default router;
