import { Router } from "express";
import { blogController } from "./blog.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "@prisma/client";


const router = Router();

router.post("/create", checkAuth(Role.SUPER_ADMIN), blogController.createBlog);
router.get("/", blogController.getAllBlog);
router.get("/:id",blogController.getBlogById);
router.put("/:id", checkAuth(Role.SUPER_ADMIN), blogController.updateBlog);
router.delete("/:id", checkAuth(Role.SUPER_ADMIN), blogController.deleteBlog);


export const blogRouter = router;