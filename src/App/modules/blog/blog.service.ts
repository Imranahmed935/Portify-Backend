import { Prisma, Post } from "@prisma/client";
import { prisma } from "../../config/db";


const createBlog = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  try {
    const newPost = await prisma.post.create({
      data: payload,
    });
    return newPost;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to create blog");
  }
};
const getAllBlog = async ()=> {
  try {
    const allBlogs = await prisma.post.findMany();
    return allBlogs;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to create blog");
  }
};
const getBlogById = async (id:number)=> {
  try {
    const Blog = await prisma.post.findUnique({
        where:{id:id}
    });
    return Blog;
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to create blog");
  }
};

export const blogService = {
  createBlog,
  getAllBlog,
  getBlogById
};
