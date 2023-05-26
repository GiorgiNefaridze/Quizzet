import { Router } from "express";

import { RegisterController } from "../controllers/RegisterController.js";

const router = Router();

router.post("/register", RegisterController);

export default router;
