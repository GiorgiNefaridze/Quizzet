import { Router } from "express";

import { SignInController } from "../controllers/SignInController";

const router = Router() as Router;

router.post("/signin", SignInController);

export default router;
