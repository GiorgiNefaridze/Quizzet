"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyToken = (header) => {
    if (!(header === null || header === void 0 ? void 0 : header.length)) {
        return;
    }
    const plainToken = header.slice(7);
    const data = (0, jsonwebtoken_1.verify)(plainToken, process.env.JWT_SECRET);
    return data === null || data === void 0 ? void 0 : data.id;
};
exports.verifyToken = verifyToken;
