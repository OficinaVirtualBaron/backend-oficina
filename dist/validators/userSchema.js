"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserSchema = joi_1.default.object({
    firstname: joi_1.default.string().min(3).max(30).required(),
    lastname: joi_1.default.string().min(3).max(30).required(),
    password: joi_1.default.string().min(8).max(30).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
    email: joi_1.default.string().email().required(),
    cuil: joi_1.default.string().min(11).max(11).alphanum().required(),
    adress: joi_1.default.string().min(3).max(30).required(),
});
exports.updateUserSchema = joi_1.default.object({
    password: joi_1.default.string().min(8).max(30).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    email: joi_1.default.string().email(),
});
