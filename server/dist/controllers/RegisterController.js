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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const MakehashedPsw_1 = require("../utils/MakehashedPsw");
const DbConnection_1 = require("../db/DbConnection");
const RegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, email, password } = req.body;
        if (!(name === null || name === void 0 ? void 0 : name.length) || !(email === null || email === void 0 ? void 0 : email.length) || !(password === null || password === void 0 ? void 0 : password.length)) {
            throw new Error("All fields are required");
        }
        const checkUser = yield DbConnection_1.pool.query(`SELECT email FROM ${process.env.USER_TABLE} WHERE email = $1`, [email]);
        if (((_a = checkUser.rows) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            throw new Error("User already exists 🤐");
        }
        const hashedPsw = yield (0, MakehashedPsw_1.MakehashedPsw)(password);
        const user = yield DbConnection_1.pool.query(`INSERT INTO ${process.env.USER_TABLE} (name, email, password) VALUES ($1,$2, $3) RETURNING *`, [name, email, hashedPsw]);
        if (!user) {
            throw new Error("Something went wrong");
        }
        res.status(201).json({ response: "User created successfully 🫦" });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.RegisterController = RegisterController;
