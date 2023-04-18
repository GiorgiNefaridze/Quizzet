"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignInController_1 = require("../controllers/SignInController");
const router = (0, express_1.Router)();
router.post("/signin", SignInController_1.SignInController);
exports.default = router;
