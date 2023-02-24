import { Router } from "express";
import { signIn, createUser, forgotPassword, resetPassword } from "../controllers/user.controller";
import { signInMuni } from "../controllers/muni.controllers";
import { isAdminRole } from "../middlewares/validateAdmin";
const router = Router();

// POST
router.post("/signUp", isAdminRole, createUser); //solo el admin puede crear usuarios por ahora
router.post("/signIn", signIn);
router.post("/signinMunicipales", signInMuni);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;