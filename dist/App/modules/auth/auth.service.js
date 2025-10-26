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
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../../config/db");
const createTokens_1 = require("../../utils/createTokens");
const logInAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    if (!email || !password) {
        console.log("⚠️ Email and Password are required!");
        return;
    }
    const admin = yield db_1.prisma.admin.findUnique({
        where: { email },
    });
    if (!admin) {
        console.log("❌ Admin not found!");
        return;
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, admin.password);
    const adminToken = (0, createTokens_1.createTokens)(admin);
    if (!isPasswordValid) {
        console.log("❌ Incorrect password!");
        return;
    }
    console.log("✅ Login successful for:", admin.email);
    return {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        accessToken: adminToken.accessToken,
        refreshToken: adminToken.refreshToken
    };
});
exports.authService = {
    logInAdmin
};
