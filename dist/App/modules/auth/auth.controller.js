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
exports.authController = void 0;
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const setCookies_1 = require("../../utils/setCookies");
const logInAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginInfo = yield auth_service_1.authService.logInAdmin(req.body);
        if (!(loginInfo === null || loginInfo === void 0 ? void 0 : loginInfo.accessToken) || !loginInfo.refreshToken) {
            throw new Error("Invalid credentials or token generation failed!");
        }
        const { accessToken, refreshToken } = loginInfo;
        if (accessToken && refreshToken) {
            (0, setCookies_1.setAuthCookie)(res, { accessToken, refreshToken });
        }
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: "Super Admin Login Successful!!",
            data: {
                id: loginInfo.id,
                email: loginInfo.email,
                role: loginInfo.role,
                accessToken: loginInfo.accessToken,
                refreshTokenToken: loginInfo.refreshToken
            },
        });
    }
    catch (error) {
        (0, sendResponse_1.sendResponse)(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Login failed!",
            data: null,
        });
    }
});
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "user logged out successfully",
        data: null,
    });
});
exports.authController = {
    logInAdmin,
    logOut
};
