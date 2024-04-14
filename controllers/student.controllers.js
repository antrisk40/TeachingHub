// controllers/student.controller.js
import Student from "../models/student.models.js";

// Controller for creating a new student
export const createStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const student = new Student({ name, age, grade });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Export other controller functions as needed
