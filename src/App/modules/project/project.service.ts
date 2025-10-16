
import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload:Prisma.ProjectCreateInput):Promise<Project> => {
  try {
    const newProject = await prisma.project.create({
      data: payload,
    });
    return newProject;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to create blog");
  }
};

export const projectService ={
    createProject
}