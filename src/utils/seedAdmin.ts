import { Role } from "@prisma/client";
import { prisma } from "../config/db";
import bcrypt from "bcrypt";

export const seedAdmin = async () => {
  try {
    const isExist = await prisma.admin.findUnique({
      where: { email: process.env.SUPER_ADMIN_EMAIL }, 
    });

    if (isExist) {
      console.log("✅ Super Admin already exists!");
      return;
    }

    const saltRounds = Number(process.env.BCRYPT_SALT_ROUND) || 10;
    const hashPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASS!, saltRounds);

    await prisma.admin.create({
      data: {
        name: process.env.SUPER_ADMIN_NAME || "Super Admin",
        email: process.env.SUPER_ADMIN_EMAIL!,
        password: hashPassword,
        role: Role.SUPER_ADMIN,
      },
    });

    console.log("🚀 Super Admin created successfully!");
  } catch (error) {
    console.error("❌ Error seeding Super Admin:", error);
  }
};
