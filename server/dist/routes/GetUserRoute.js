"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetUserController_1 = require("../controllers/GetUserController");
const GetUsersController_1 = require("../controllers/GetUsersController");
const router = (0, express_1.Router)();
router.get("/", GetUserController_1.GetUserController);
router.get("/users", GetUsersController_1.GetUsersController);
exports.default = router;
