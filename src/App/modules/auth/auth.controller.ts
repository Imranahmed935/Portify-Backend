import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";
import { setAuthCookie } from "../../utils/setCookies";


const logInAdmin = async (req: Request, res: Response) => {
  try {
    const loginInfo = await authService.logInAdmin(req.body);

    if (!loginInfo?.accessToken || !loginInfo.refreshToken) {
      throw new Error("Invalid credentials or token generation failed!");
    }

    const { accessToken, refreshToken } = loginInfo;

    if (accessToken && refreshToken) {
      setAuthCookie(res, { accessToken, refreshToken });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Super Admin Login Successful!!",
      data: {
        id: loginInfo.id,
        email: loginInfo.email,
        role: loginInfo.role,
        accessToken:loginInfo.accessToken,
        refreshTokenToken:loginInfo.refreshToken
      },
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message || "Login failed!",
      data: null,
    });
  }
};

const logOut = 
  async (req: Request, res: Response) => {
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

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "user logged out successfully",
      data: null,
    });
  }
;

export const authController = {
  logInAdmin,
  logOut
};
