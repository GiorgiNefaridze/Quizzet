"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createToken = (data) => {
    const secret = process.env.JWT_SECRET;
    if (secret) {
        return (0, jsonwebtoken_1.sign)(data, secret);
    }
    else {
        return null;
    }
};
exports.createToken = createToken;