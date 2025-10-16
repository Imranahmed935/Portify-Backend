import express, { Request, Response } from "express";
import cors from "cors";
import { adminRouter } from "./App/modules/auth/auth.route";
import cookieParser from "cookie-parser";
import { blogRouter } from "./App/modules/blog/blog.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/auth", adminRouter);
app.use("/api/v1/blog", blogRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Portify api is Running!!!");
});

export default app;
