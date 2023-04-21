"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const DbConnection_1 = require("../db/DbConnection");
const VerifyToken_1 = require("../utils/VerifyToken");
dotenv_1.default.config();
const GetUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = req.headers["authorization"];
        const id = (0, VerifyToken_1.verifyToken)(header);
        const user = yield DbConnection_1.pool.query(`SELECT name,email FROM ${process.env.USER_TABLE} WHERE id = $1`, [id]);
        if (!user) {
            throw new Error("Something went wrong");
        }
        res.status(200).json({ response: user.rows[0] });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.GetUserController = GetUserController;
