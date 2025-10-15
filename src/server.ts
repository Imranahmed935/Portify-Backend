import http, { Server } from "http";
import dotenv from "dotenv";
import app from "./app";
import { prisma } from "./config/db";
import { seedAdmin } from "./utils/seedAdmin";


dotenv.config();
let server: Server | null = null;

async function connectToDB() {
  try {
    await prisma.$connect();
    await seedAdmin()
    console.log("*** DB connection successfull!!")
  } catch (error) {
    console.log("*** DB connection failed!")
    process.exit(1);
  }
}

async function startServer() {
  try {
    await connectToDB()
    server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`The Server is Running on the Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Error during server startup:", error);
    process.exit(1);
  }
}
 
startServer();
