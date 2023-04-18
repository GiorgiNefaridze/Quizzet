"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = require("../controllers/RegisterController");
const router = (0, express_1.Router)();
router.post("/register", RegisterController_1.RegisterController);
exports.default = router;
