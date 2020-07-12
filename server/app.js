import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";

import router from "./routes";
import logger from "./services/logger";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/dist")));
}
app.use(morgan("combined", { stream: logger.stream }));
app.use("/api", router);

export default app;
