import { Router } from "express";
import {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedback.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const feedbackRoute = Router();

feedbackRoute.post("/", isLoggedIn, createFeedback);
feedbackRoute.get("/", isLoggedIn, getFeedbacks);
feedbackRoute.get("/:id", isLoggedIn, getFeedbackById);
feedbackRoute.put("/:id", isLoggedIn, updateFeedback);
feedbackRoute.delete("/:id", isLoggedIn, deleteFeedback);

export default feedbackRoute;
