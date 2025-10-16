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

export const blogController = {
    createBlog,
    getAllBlog
}