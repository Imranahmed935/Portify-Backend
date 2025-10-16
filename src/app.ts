import express, { Request, Response } from "express";
import cors from "cors";
import { adminRouter } from "./App/modules/auth/auth.route";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/auth", adminRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Portify api is Running!!!");
});

export default app;
