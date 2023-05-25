import { Router } from "express";

import { RegisterController } from "../controllers/RegisterController";

const router = Router() as Router;

router.post("/register", RegisterController);

export default router;
