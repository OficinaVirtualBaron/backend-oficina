"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const procedure_controllers_1 = require("../controllers/procedure.controllers");
const validateId = (req, res, next) => {
    const { id } = req.params;
    const token = req.header("auth-header");
    try {
        if (!token) {
            return res.status(401).json("No hay token en la petición. Acceso denegado");
        }
        const payload = jsonwebtoken_1.default.verify(token, procedure_controllers_1.SECRET_TOKEN_KEY || "tokentest");
        req.userId = payload.id;
        if (id != req.userId) {
            res.status(401).json({ message: "Usted no es el mismo usuario. Acceso denegado" });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(401).json("Token no válido. Acceso denegado");
    }
};
exports.validateId = validateId;
