import { Request, Response } from "express";
import { sendResponse } from "../../../utils/sendResponse";
import { authService } from "./auth.service";

const logInAdmin = async (req: Request, res: Response) => {
  try {
    const loginInfo = await authService.logInAdmin(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Super Admin Login Successful!!",
      data: loginInfo,
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

export const authController = {
  logInAdmin,
};
