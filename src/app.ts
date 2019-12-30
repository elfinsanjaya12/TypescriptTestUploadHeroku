import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

// Create Express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  const name: string = "elfin sanjaya";
  return res.status(200).json({
    massage: `Welcome to Boilerplate TypeScript ${name}`
  });
});

export default app;