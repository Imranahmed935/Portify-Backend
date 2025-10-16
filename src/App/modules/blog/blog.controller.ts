import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { blogService } from "./blog.service";

const createBlog = async (req:Request, res:Response)=>{
    try {
    const blog = await blogService.createBlog(req.body)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Blog created Successful!!",
      data: blog
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Blog creation failed!",
      data: null,
    });
  }
}
const getAllBlog = async (req:Request, res:Response)=>{
    try {
    const blogs = await blogService.getAllBlog()
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Retrived allBlog Successfully!!",
      data: blogs
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Blog creation failed!",
      data: null,
    });
  }
}
const getBlogById = async (req:Request, res:Response)=>{
    try {
    const blog = await blogService.getBlogById(Number(req.params.id))
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Retrived a Blog Successfully!!",
      data: blog
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Blog creation failed!",
      data: null,
    });
  }
}
const updateBlog = async (req:Request, res:Response)=>{
    try {
    const blog = await blogService.updateBlog(Number(req.params.id), req.body)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: " Blog updated Successfully!!",
      data: blog
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Blog update failed!",
      data: null,
    });
  }
}
const deleteBlog = async (req:Request, res:Response)=>{
    try {
    const blog = await blogService.deleteBlog(Number(req.params.id))
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: " Blog Deleted Successfully!!",
      data: blog
    });
    } catch (error: any) {
     sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Blog update failed!",
      data: null,
    });
  }
}



export const blogController = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}