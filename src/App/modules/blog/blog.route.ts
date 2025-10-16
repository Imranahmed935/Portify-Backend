import { Router } from "express";
import { blogController } from "./blog.controller";


const router = Router();

router.post("/create", blogController.createBlog);
router.get("/", blogController.getAllBlog);
router.get("/:id", blogController.getBlogById);
router.put("/:id", blogController.updateBlog);


export const blogRouter = router;