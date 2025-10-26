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
exports.seedAdmin = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExist = yield db_1.prisma.admin.findUnique({
            where: { email: process.env.SUPER_ADMIN_EMAIL },
        });
        if (isExist) {
            console.log("✅ Super Admin already exists!");
            return;
        }
        const saltRounds = Number(process.env.BCRYPT_SALT_ROUND) || 10;
        const hashPassword = yield bcrypt_1.default.hash(process.env.SUPER_ADMIN_PASS, saltRounds);
        yield db_1.prisma.admin.create({
            data: {
                name: process.env.SUPER_ADMIN_NAME || "Super Admin",
                email: process.env.SUPER_ADMIN_EMAIL,
                password: hashPassword,
                role: client_1.Role.SUPER_ADMIN,
            },
        });
        console.log("🚀 Super Admin created successfully!");
    }
    catch (error) {
        console.error("❌ Error seeding Super Admin:", error);
    }
});
exports.seedAdmin = seedAdmin;
