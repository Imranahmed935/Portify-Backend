import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "@prisma/client";
import { projectController } from "./project.controller";


const router = Router();

router.post("/create", checkAuth(Role.SUPER_ADMIN), projectController.createProject);
// router.get("/", checkAuth(Role.SUPER_ADMIN), blogController.getAllBlog);
// router.get("/:id", checkAuth(Role.SUPER_ADMIN), blogController.getBlogById);
// router.put("/:id", checkAuth(Role.SUPER_ADMIN), blogController.updateBlog);
// router.delete("/:id", checkAuth(Role.SUPER_ADMIN), blogController.deleteBlog);


export const projectRouter = router;