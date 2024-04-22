import { Router } from "express";
import {
  markAttendance,
  getAttendance,
  updateAttendance,
  deleteAttendance,
} from "../controllers/teacherAttendance.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const teacherAttendanceRoute = Router();

teacherAttendanceRoute.post("/", isLoggedIn, markAttendance);
teacherAttendanceRoute.get("/", isLoggedIn, getAttendance);
teacherAttendanceRoute.put("/:id", isLoggedIn, updateAttendance);
teacherAttendanceRoute.delete("/:id", isLoggedIn, deleteAttendance);

export default teacherAttendanceRoute;
