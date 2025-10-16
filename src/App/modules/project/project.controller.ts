import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { projectService } from "./project.service";

const createProject = async (req:Request, res:Response)=>{
    try {
    const project = await projectService.createProject(req.body)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "project created Successful!!",
      data: project
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Project creation failed!",
      data: null,
    });
  }
}
const getAllProject = async (req:Request, res:Response)=>{
    try {
    const project = await projectService.getAllProject();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "projects Retrived Successful!!",
      data: project
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Project Retrived failed!",
      data: null,
    });
  }
}

export const projectController ={
    createProject,
    getAllProject
}