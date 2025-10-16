import { Router } from "express";
import { blogController } from "./blog.controller";


const router = Router();

router.post("/create", blogController.createBlog);
// router.post("/logout", authController.logOut);

export const blogRouter = router;