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
exports.UpdateUserConrtroller = void 0;
const VerifyToken_1 = require("../utils/VerifyToken");
const DbConnection_1 = require("../db/DbConnection");
const UpdateUserConrtroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { score } = req.body;
        const header = req.headers["authorization"];
        const id = (0, VerifyToken_1.verifyToken)(header);
        const findUserScore = yield DbConnection_1.pool.query(`SELECT score from ${process.env.USER_TABLE} WHERE id = $1`, [id]);
        const updateScore = yield DbConnection_1.pool.query(`UPDATE ${process.env.USER_TABLE} SET score = $1 WHERE id = $2 RETURNING score`, [Number((_a = findUserScore === null || findUserScore === void 0 ? void 0 : findUserScore.rows[0]) === null || _a === void 0 ? void 0 : _a.score) + Number(score), id]);
        res.status(200).json({ response: (_b = updateScore.rows[0]) === null || _b === void 0 ? void 0 : _b.score });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.UpdateUserConrtroller = UpdateUserConrtroller;
