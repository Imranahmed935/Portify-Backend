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
exports.blogController = void 0;
const sendResponse_1 = require("../../utils/sendResponse");
const blog_service_1 = require("./blog.service");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.blogService.createBlog(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Blog created Successful!!",
            data: blog
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Blog creation failed!",
            data: null,
        });
    }
});
const getAllBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_service_1.blogService.getAllBlog();
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Retrived allBlog Successfully!!",
            data: blogs
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Blog creation failed!",
            data: null,
        });
    }
});
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.blogService.getBlogById(Number(req.params.id));
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Retrived a Blog Successfully!!",
            data: blog
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Blog creation failed!",
            data: null,
        });
    }
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.blogService.updateBlog(Number(req.params.id), req.body);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: " Blog updated Successfully!!",
            data: blog
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Blog update failed!",
            data: null,
        });
    }
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.blogService.deleteBlog(Number(req.params.id));
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: " Blog Deleted Successfully!!",
            data: blog
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Blog update failed!",
            data: null,
        });
    }
});
exports.blogController = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
};
