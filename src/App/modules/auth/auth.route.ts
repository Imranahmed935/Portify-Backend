import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

router.post("/login", authController.logInAdmin);
router.post("/logout", authController.logOut);

export const adminRouter = router;
