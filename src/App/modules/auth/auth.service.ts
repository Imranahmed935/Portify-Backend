import bcrypt from "bcrypt";
import { prisma } from "../../config/db";
import { createTokens } from "../../utils/createTokens";


interface AdminLoginPayload {
  email: string;
  password: string;
}

 const logInAdmin = async (payload: AdminLoginPayload) => {
  const { email, password } = payload;

  if (!email || !password) {
    console.log("⚠️ Email and Password are required!");
    return;
  }

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    console.log("❌ Admin not found!");
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  const adminToken = createTokens(admin)
   
  

  if (!isPasswordValid) {
    console.log("❌ Incorrect password!");
    return;
  }
  console.log("✅ Login successful for:", admin.email);
  return {
    id: admin.id,
    email: admin.email,
    role: admin.role,
    accessToken:adminToken.accessToken,
    refreshToken:adminToken.refreshToken
  };

  
};

export const authService = {
    logInAdmin
}
