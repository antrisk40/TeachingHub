import { Router } from "express";
import {
  createVideo,
  getVideos,
  updateVideo,
  deleteVideo,
} from "../controllers/video.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const videoRoute = Router();

videoRoute.post("/", isLoggedIn, createVideo);
videoRoute.get("/", isLoggedIn, getVideos);
videoRoute.put("/:id", isLoggedIn, updateVideo);
videoRoute.delete("/:id", isLoggedIn, deleteVideo);

export default videoRoute;
