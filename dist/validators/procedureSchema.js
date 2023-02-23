"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitProcedureSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.submitProcedureSchema = joi_1.default.object({
    procedureId: joi_1.default.number().min(1),
    userId: joi_1.default.number().min(1),
    categoryId: joi_1.default.number().min(1),
    statusId: joi_1.default.number().min(1),
    questions: joi_1.default.array(),
});
