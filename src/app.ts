import express, { Request, Response } from "express";
import cors from "cors";
import { adminRouter } from "./App/modules/auth/auth.route";
import cookieParser from "cookie-parser";
import { blogRouter } from "./App/modules/blog/blog.route";
import { projectRouter } from "./App/modules/project/project.route";

const app = express();

// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/auth", adminRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/project", projectRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Portify api is Running!!!");
});

export default app;
