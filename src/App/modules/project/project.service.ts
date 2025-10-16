
import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload:Prisma.ProjectCreateInput):Promise<Project> => {
  try {
    const newProject = await prisma.project.create({
      data: payload,
    });
    return newProject;
  } catch (error: any) {
    console.error("Error creating project:", error);
    throw new Error(error.message || "Failed to create project");
  }
};


const getAllProject = async () => {
  try {
    const allProjects = await prisma.project.findMany();
    return allProjects;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to get all project");
  }
};


const getProjectById = async (id:number) => {
  try {
    const Project = await prisma.project.findUnique({
        where:{id:id}
    });
    return Project;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to get single project");
  }
};
const updatedProject = async (id:number, data:Prisma.ProjectCreateInput):Promise<Project> => {
  try {
    const projectUpdated = await prisma.project.update({
        where:{id:id},
        data
    });
    return projectUpdated;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to get single project");
  }
};


const deleteProject = async (id:number) => {
  try {
    const projectUpdated = await prisma.project.delete({
        where:{id:id}
    });
    return projectUpdated;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to get single project");
  }
};

export const projectService ={
    createProject,
    getAllProject,
    getProjectById,
    updatedProject,
    deleteProject
}