// routes/studentRoutes.mjs
import express from "express";
const router = express.Router();
import Student from "../models/student.models.js";

// Create a new student
router.post("/", async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const student = new Student({ name, age, grade });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
