"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const GOOGLE_APP_NAME = process.env.GOOGLE_APP_NAME;
const GOOGLE_APP_PASSWORD = process.env.GOOGLE_APP_PASSWORD;
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: GOOGLE_APP_NAME,
        pass: GOOGLE_APP_PASSWORD,
    },
});
