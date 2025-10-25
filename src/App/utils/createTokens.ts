
import { prisma } from "../config/db";
import { generateToken, verifyToken } from "./jwt";

export const createTokens = (payload: any) => {
  const jwtPayload = {
    id: payload.id,
    email: payload.email,
    role: payload.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    process.env.JWT_SECRET!,
    process.env.JWT_EXPIRED!
  );
  const refreshToken = generateToken(
    jwtPayload,
    process.env.JWT_REFRESH_SECRET!,
    process.env.JWT_REFRESH_EXPIRES!
  );

  return {
    accessToken,
    refreshToken
  };
};

export const createAccessTokenWithRefreshToken = async (refreshToken: string) => {
  const verifiedRefreshToken = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!) as {
    id: string;
    email: string;
    role: string;
  };

  const existEmail = await prisma.admin.findUnique({
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

  const accessToken = generateToken(jwtPayload, process.env.JWT_SECRET!, process.env.JWT_EXPIRED!);
  return accessToken;
};
