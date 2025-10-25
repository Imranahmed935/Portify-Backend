import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";
import { prisma } from "../config/db";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
  
    try {
      const authHeader = req.headers.authorization || req.cookies?.accessToken;
      if (!authHeader) {
        throw new AppError(403, "No token provided!");
      }

      const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

        console.log(token)

      const verifiedToken = verifyToken(token, process.env.JWT_SECRET!) as {
        id: number;
        email: string;
        role:string,
        accessToken:string
      };

      const existAdmin = await prisma.admin.findUnique({
        where: { email: verifiedToken.email },
      });
      
      console.log(existAdmin)

      if (!existAdmin) {
        throw new AppError(404, "Admin does not exist!");
      }

      req.admin = {email:existAdmin.email, role:existAdmin.role, id:existAdmin.id}

      if (authRoles.length && !authRoles.includes(existAdmin.role)) {
        throw new AppError(403, "You are not permitted to view this route!");
      }

      next();
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        next(new AppError(401, "Token expired. Please log in again!"));
      } else if (error.name === "JsonWebTokenError") {
        next(new AppError(401, "Invalid token!"));
      } else {
        next(error);
      }
    }
  };
