"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createCategorySchema = joi_1.default.object({
    user_id: joi_1.default.number().max(30),
    title: joi_1.default.string().min(5).max(30),
    category_id: joi_1.default.number().max(30),
    description: joi_1.default.string().min(10).max(100),
});
exports.updateCategorySchema = joi_1.default.object({
    title: joi_1.default.string().min(5).max(30),
    description: joi_1.default.string().min(10).max(100),
});
