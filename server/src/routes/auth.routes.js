import { Router } from "express";
import { loginUser,logoutUser, registerUser, checkAuth } from "../controllers/auth.controllers.js";
import { protect } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/checkauth",protect, checkAuth);
router.post("/logout", logoutUser);

export default router;