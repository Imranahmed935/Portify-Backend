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
exports.projectService = void 0;
const db_1 = require("../../config/db");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProject = yield db_1.prisma.project.create({
            data: payload,
        });
        return newProject;
    }
    catch (error) {
        console.error("Error creating project:", error);
        throw new Error(error.message || "Failed to create project");
    }
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProjects = yield db_1.prisma.project.findMany();
        return allProjects;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to get all project");
    }
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Project = yield db_1.prisma.project.findUnique({
            where: { id: id }
        });
        return Project;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to get single project");
    }
});
const updatedProject = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectUpdated = yield db_1.prisma.project.update({
            where: { id: id },
            data
        });
        return projectUpdated;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to get single project");
    }
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectUpdated = yield db_1.prisma.project.delete({
            where: { id: id }
        });
        return projectUpdated;
    }
    catch (error) {
        console.error("Error creating blog:", error);
        throw new Error(error.message || "Failed to get single project");
    }
});
exports.projectService = {
    createProject,
    getAllProject,
    getProjectById,
    updatedProject,
    deleteProject
};
