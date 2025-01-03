import cors from "cors";
import express from "express";
import expressFileUpload from "express-fileupload";
import fs from "fs";
import helmet from "helmet"; // npm i helmet
import https from "https";
import path from "path";
import { fileSaver } from "uploaded-file-saver";
import { appConfig } from "./2-utils/app-config";
import { eventController } from "./5-controllers/event-controller";
import { userController } from "./5-controllers/user-controller";
import { errorsMiddleware } from "./6-middleware/errors-middleware";
import { securityMiddleware } from "./6-middleware/security-middleware";

// Configure fileSaver once:
fileSaver.config(path.join(__dirname, "1-assets", "images"));

// Create main server object:
const server = express();

// Enable CORS:
server.use(cors());

// Create the body from json:
server.use(express.json());

// Read files into request.files:
server.use(expressFileUpload());

// Register middleware:
server.use(securityMiddleware.preventXssAttack);

// Register routes:
server.use("/api", eventController.router, userController.router);

// Register route not found middleware:
server.use("*", errorsMiddleware.routeNotFound);

// Register catchAll middleware:
server.use(errorsMiddleware.catchAll);

// Run server:
server.listen(appConfig.port, () =>
  console.log("Listening on http://localhost:" + appConfig.port)
);

// const httpsServer = https.createServer(server);
// httpsServer.listen(appConfig.port, () =>
//   console.log("Listening on https://localhost:" + appConfig.port)
// );
