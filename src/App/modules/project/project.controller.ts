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

const getProjectById = async (req:Request, res:Response)=>{
    try {
    const project = await projectService.getProjectById(Number(req.params.id));
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project By Id Retrived Successful!!",
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

const updatedProject = async (req:Request, res:Response)=>{
    try {
    const project = await projectService.updatedProject(Number(req.params.id), req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project updated Successful!!",
      data: project
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Project update failed!",
      data: null,
    });
  }
}
const deleteProject = async (req:Request, res:Response)=>{
    try {
    const project = await projectService.deleteProject(Number(req.params.id));
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project deleted Successful!!",
      data: project
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Project deleted failed!",
      data: null,
    });
  }
}

export const projectController ={
    createProject,
    getAllProject,
    getProjectById,
    updatedProject,
    deleteProject
}