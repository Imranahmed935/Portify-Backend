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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const jwt_1 = require("../utils/jwt");
const db_1 = require("../config/db");
const checkAuth = (...authRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const authHeader = req.headers.authorization || ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken);
        if (!authHeader) {
            throw new AppError_1.default(403, "No token provided!");
        }
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader;
        console.log(token);
        const verifiedToken = (0, jwt_1.verifyToken)(token, process.env.JWT_SECRET);
        const existAdmin = yield db_1.prisma.admin.findUnique({
            where: { email: verifiedToken.email },
        });
        if (!existAdmin) {
            throw new AppError_1.default(404, "Admin does not exist!");
        }
        req.admin = { email: existAdmin.email, role: existAdmin.role, id: existAdmin.id };
        if (authRoles.length && !authRoles.includes(existAdmin.role)) {
            throw new AppError_1.default(403, "You are not permitted to view this route!");
        }
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            next(new AppError_1.default(401, "Token expired. Please log in again!"));
        }
        else if (error.name === "JsonWebTokenError") {
            next(new AppError_1.default(401, "Invalid token!"));
        }
        else {
            next(error);
        }
    }
});
exports.checkAuth = checkAuth;
