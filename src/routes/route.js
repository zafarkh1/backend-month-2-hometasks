import { Router } from "express";
import { fileUploadController } from "../controllers/file-upload.controller.js";
import { userController } from "../controllers/user.controller.js";
import { storage } from "../helpers/multer.helper.js";
import multer from "multer";

const router = Router();

const upload = multer({ storage });

export default router
  .post("/user-info", upload.array("file"), fileUploadController)
  .get("/user", userController);