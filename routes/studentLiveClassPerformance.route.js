import { Router } from "express";
import {
  recordPerformance,
  getPerformance,
  updatePerformance,
  deletePerformance,
} from "../controllers/studentLiveClassPerformance.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const studentLiveClassPerformanceRoute = Router();

studentLiveClassPerformanceRoute.post("/", isLoggedIn, recordPerformance);
studentLiveClassPerformanceRoute.get("/", isLoggedIn, getPerformance);
studentLiveClassPerformanceRoute.put("/:id", isLoggedIn, updatePerformance);
studentLiveClassPerformanceRoute.delete("/:id", isLoggedIn, deletePerformance);

export default studentLiveClassPerformanceRoute;
