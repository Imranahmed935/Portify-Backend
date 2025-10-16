import { Router } from "express";
import { blogController } from "./blog.controller";


const router = Router();

router.post("/create", blogController.createBlog);
router.get("/", blogController.getAllBlog);


export const blogRouter = router;