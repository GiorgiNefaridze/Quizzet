import { Router } from "express";

import { SignInController } from "../controllers/SignInController.js";

const router = Router();

router.post("/signin", SignInController);

export default router;
