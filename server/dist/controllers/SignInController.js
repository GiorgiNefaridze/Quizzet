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
exports.SignInController = void 0;
const DbConnection_1 = require("../db/DbConnection");
const MakePlainPsw_1 = require("../utils/MakePlainPsw");
const CreateToken_1 = require("../utils/CreateToken");
const SignInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const { email, password } = req.body;
        if (!(email === null || email === void 0 ? void 0 : email.length) || !(password === null || password === void 0 ? void 0 : password.length)) {
            throw new Error("All fields are required");
        }
        const user = yield DbConnection_1.pool.query(`SELECT * FROM ${process.env.USER_TABLE} WHERE email = $1`, [email]);
        const userPsw = (_a = user.rows) === null || _a === void 0 ? void 0 : _a[0];
        const plainPsw = yield (0, MakePlainPsw_1.makePlainPsw)(password, (_b = userPsw === null || userPsw === void 0 ? void 0 : userPsw.password) !== null && _b !== void 0 ? _b : "");
        if (((_c = user.rows) === null || _c === void 0 ? void 0 : _c.length) < 1 || !plainPsw) {
            throw new Error("Wrong credentials");
        }
        const token = (0, CreateToken_1.createToken)({ id: (_e = (_d = user.rows) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.id });
        if (!token) {
            throw new Error("Something went wrong");
        }
        res.status(200).json({ response: token });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.SignInController = SignInController;
