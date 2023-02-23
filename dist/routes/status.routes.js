"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const status_controller_1 = require("../controllers/status.controller");
const validateAdmin_1 = require("../middlewares/validateAdmin");
const router = (0, express_1.Router)();
// POST
router.post("/", validateAdmin_1.isAdminRole, status_controller_1.createStatus);
exports.default = router;
