import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const courseRoute = Router();

courseRoute.post("/", isLoggedIn, createCourse);
courseRoute.get("/", isLoggedIn, getCourses);
courseRoute.get("/:id", isLoggedIn, getCourseById);
courseRoute.put("/:id", isLoggedIn, updateCourse);
courseRoute.delete("/:id", isLoggedIn, deleteCourse);

export default courseRoute;
