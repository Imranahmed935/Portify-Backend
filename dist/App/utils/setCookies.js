"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthCookie = void 0;
const setAuthCookie = (res, tokenInfo) => {
    if (tokenInfo.accessToken) {
        res.cookie("accessToken", tokenInfo.accessToken, {
            httpOnly: true,
            secure: false, // change to true in production with HTTPS
            sameSite: "lax",
            path: "/",
        });
    }
    if (tokenInfo.refreshToken) {
        res.cookie("refreshToken", tokenInfo.refreshToken, {
            httpOnly: true,
            secure: false, // change to true in production with HTTPS
            sameSite: "lax",
            path: "/",
        });
    }
};
exports.setAuthCookie = setAuthCookie;
