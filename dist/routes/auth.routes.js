"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const muni_controllers_1 = require("../controllers/muni.controllers");
const validateAdmin_1 = require("../middlewares/validateAdmin");
const router = (0, express_1.Router)();
// POST
router.post("/signUp", validateAdmin_1.isAdminRole, user_controller_1.createUser); //solo el admin puede crear usuarios por ahora
router.post("/signIn", user_controller_1.signIn);
router.post("/signinMunicipales", muni_controllers_1.signInMuni);
router.post("/forgot-password", user_controller_1.forgotPassword);
router.post("/reset-password/:token", user_controller_1.resetPassword);
exports.default = router;
