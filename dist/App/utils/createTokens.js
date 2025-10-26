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
exports.createAccessTokenWithRefreshToken = exports.createTokens = void 0;
const db_1 = require("../config/db");
const jwt_1 = require("./jwt");
const createTokens = (payload) => {
    const jwtPayload = {
        id: payload.id,
        email: payload.email,
        role: payload.role,
    };
    const accessToken = (0, jwt_1.generateToken)(jwtPayload, process.env.JWT_SECRET, process.env.JWT_EXPIRED);
    const refreshToken = (0, jwt_1.generateToken)(jwtPayload, process.env.JWT_REFRESH_SECRET, process.env.JWT_REFRESH_EXPIRES);
    return {
        accessToken,
        refreshToken
    };
};
exports.createTokens = createTokens;
const createAccessTokenWithRefreshToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    const verifiedRefreshToken = (0, jwt_1.verifyToken)(refreshToken, process.env.JWT_REFRESH_SECRET);
    const existEmail = yield db_1.prisma.admin.findUnique({
        where: { email: verifiedRefreshToken.email },
    });
    if (!existEmail) {
        throw new Error("User does not Exist!");
    }
    const jwtPayload = {
        id: existEmail.id,
        email: existEmail.email,
        role: existEmail.role,
    };
    const accessToken = (0, jwt_1.generateToken)(jwtPayload, process.env.JWT_SECRET, process.env.JWT_EXPIRED);
    return accessToken;
});
exports.createAccessTokenWithRefreshToken = createAccessTokenWithRefreshToken;
