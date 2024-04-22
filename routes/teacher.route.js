import { Router } from "express";
import {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacher.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const teacherRoute = Router();

teacherRoute.post("/", isLoggedIn, createTeacher);
teacherRoute.get("/", isLoggedIn, getTeachers);
teacherRoute.put("/:id", isLoggedIn, updateTeacher);
teacherRoute.delete("/:id", isLoggedIn, deleteTeacher);

export default teacherRoute;
