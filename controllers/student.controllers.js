// controllers/student.controller.js
import Student from "../models/student.models.js";
import ApiError from "../utills/error.utills.js"


// Controller for creating a new student
export const createStudent = async (req, res,next) => {
  try {
    const { name, age, grade } = req.body;
    if(!name || !age || grade){
       return next(new ApiError(404,"Every field is required"));
    }
    const student = new Student({ name, age, grade });
    await student.save();
    res.status(201).json(
      message="Student details ",
      data=student
    );
  } catch (error) {
    return next(new ApiError(409, error.message));
  }
};


// Export other controller functions as needed
