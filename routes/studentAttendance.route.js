import { Router } from "express";
import {
  markAttendance,
  getAttendance,
  updateAttendance,
  deleteAttendance,
} from "../controllers/studentAttendance.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const studentAttendanceRoute = Router();

studentAttendanceRoute.post("/", isLoggedIn, markAttendance);
studentAttendanceRoute.get("/", isLoggedIn, getAttendance);
studentAttendanceRoute.put("/:id", isLoggedIn, updateAttendance);
studentAttendanceRoute.delete("/:id", isLoggedIn, deleteAttendance);

export default studentAttendanceRoute;
