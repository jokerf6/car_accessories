import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import morgan from "morgan";
import dotenv from "dotenv";
import setupmodels from "./models/setupmodels.js";
import connection from "./util/connection.js";
import APIrouter from "./routes/APIrouter.js";
import bodyParser from "body-parser";
import Cors from "cors";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
app.use(async (req, res, next) => {
  req.models = connection.models;
  next();
});
app.use(Cors());

// view engine setup
app.set("view engine", "pug");
app.use(express.static(__dirname + "views"));
app.use(express.static(__dirname + "public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", APIrouter);

try {
  await setupmodels(connection);
  await connection.authenticate();
  await connection.sync();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", error);
}

app.listen(process.env.port || 3000, () => {
  console.log(`http://127.0.0.1:${process.env.port || 3000}`);
});
