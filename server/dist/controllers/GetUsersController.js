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
exports.GetUsersController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const DbConnection_1 = require("../db/DbConnection");
dotenv_1.default.config();
const GetUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const users = yield DbConnection_1.pool.query(`SELECT name,isMale,score FROM ${process.env.USER_TABLE} `);
        if (!((_a = users === null || users === void 0 ? void 0 : users.rows) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error("Something went wrong");
        }
        res.status(200).json({ response: users === null || users === void 0 ? void 0 : users.rows });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.GetUsersController = GetUsersController;
