// StudentPerformance.model.js
import mongoose from "mongoose";

const StudentPerformanceSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  date: { type: Date, required: true },
  score: { type: Number },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const StudentPerformance = mongoose.model(
  "StudentPerformance",
  StudentPerformanceSchema
);

export default StudentPerformance;
