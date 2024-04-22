import { Router } from "express";
import {
  createPerformance,
  getPerformances,
  updatePerformance,
  deletePerformance,
} from "../controllers/teacherPerformance.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const teacherPerformanceRoute = Router();

teacherPerformanceRoute.post("/", isLoggedIn, createPerformance);
teacherPerformanceRoute.get("/", isLoggedIn, getPerformances);
teacherPerformanceRoute.put("/:id", isLoggedIn, updatePerformance);
teacherPerformanceRoute.delete("/:id", isLoggedIn, deletePerformance);

export default teacherPerformanceRoute;
