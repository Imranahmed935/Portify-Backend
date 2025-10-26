"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const db_1 = require("../../config/db");
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = yield db_1.prisma.post.create({
            data: payload,
        });
        return newPost;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to create blog");
    }
});
const getAllBlog = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogs = yield db_1.prisma.post.findMany();
        return allBlogs;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to create blog");
    }
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Blog = yield db_1.prisma.post.findUnique({
            where: { id: id }
        });
        return Blog;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to create blog");
    }
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = yield db_1.prisma.post.update({
            where: { id: id },
            data: payload
        });
        return updatedBlog;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to create blog");
    }
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBlog = yield db_1.prisma.post.delete({
            where: { id: id },
        });
        return deletedBlog;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to create blog");
    }
});
exports.blogService = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
};
