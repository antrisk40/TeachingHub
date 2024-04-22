import { Router } from "express";
import { recordPerformance, getPerformance, updatePerformance, deletePerformance } from "../controllers/studentPerformance.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const studentPerformanceRoute = Router();

studentPerformanceRoute.post("/", isLoggedIn, recordPerformance);
studentPerformanceRoute.get("/", isLoggedIn, getPerformance);
studentPerformanceRoute.put("/:id", isLoggedIn, updatePerformance);
studentPerformanceRoute.delete("/:id", isLoggedIn, deletePerformance);

export default studentPerformanceRoute;
