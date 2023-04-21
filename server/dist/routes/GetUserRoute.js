"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetUserController_1 = require("../controllers/GetUserController");
const router = (0, express_1.Router)();
router.get("/", GetUserController_1.GetUserController);
exports.default = router;
