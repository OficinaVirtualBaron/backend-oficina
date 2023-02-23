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
exports.createStatus = void 0;
const Status_1 = require("../entities/Status");
const repository_1 = require("../config/repository/repository");
// POST
const createStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const newStatus = new Status_1.Status();
        newStatus.status = status;
        if (status === "") {
            return res.status(405).send({ message: "El campo status no puede quedar vacío. Completelo por favor" });
        }
        if (status === null) {
            return res.status(405).send({ message: "El status no puede ser null" });
        }
        yield repository_1.statusProcedure.save(newStatus);
        return res.status(200).send({ message: "Estado creado correctamente" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createStatus = createStatus;
