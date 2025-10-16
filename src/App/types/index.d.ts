import { Role } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      admin?: {
        id: number;
        email: string;
        role: Role | string;
      };
    }
  }
}