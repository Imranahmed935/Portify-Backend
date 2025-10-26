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
exports.projectController = void 0;
const sendResponse_1 = require("../../utils/sendResponse");
const project_service_1 = require("./project.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.createProject(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "project created Successful!!",
            data: project
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Project creation failed!",
            data: null,
        });
    }
});
const getAllProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.getAllProject();
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "projects Retrived Successful!!",
            data: project
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Project Retrived failed!",
            data: null,
        });
    }
});
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.getProjectById(Number(req.params.id));
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Project By Id Retrived Successful!!",
            data: project
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Project Retrived failed!",
            data: null,
        });
    }
});
const updatedProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.updatedProject(Number(req.params.id), req.body);
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Project updated Successful!!",
            data: project
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Project update failed!",
            data: null,
        });
    }
});
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_service_1.projectService.deleteProject(Number(req.params.id));
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Project deleted Successful!!",
            data: project
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Project deleted failed!",
            data: null,
        });
    }
});
exports.projectController = {
    createProject,
    getAllProject,
    getProjectById,
    updatedProject,
    deleteProject
};
