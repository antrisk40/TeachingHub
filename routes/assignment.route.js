import { Router } from "express";
import {
  createAssignment,
  getAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignment.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

const assignmentRoute = Router();

assignmentRoute.post("/", isLoggedIn, createAssignment);
assignmentRoute.get("/", isLoggedIn, getAssignments);
assignmentRoute.get("/:id", isLoggedIn, getAssignmentById);
assignmentRoute.put("/:id", isLoggedIn, updateAssignment);
assignmentRoute.delete("/:id", isLoggedIn, deleteAssignment);

export default assignmentRoute;
