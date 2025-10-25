import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "@prisma/client";
import { projectController } from "./project.controller";


const router = Router();

router.post("/create", checkAuth(Role.SUPER_ADMIN), projectController.createProject);
router.get("/", projectController.getAllProject);
router.get("/:id", projectController.getProjectById);
router.put("/:id", checkAuth(Role.SUPER_ADMIN), projectController.updatedProject);
router.delete("/:id", checkAuth(Role.SUPER_ADMIN), projectController.deleteProject);


export const projectRouter = router;