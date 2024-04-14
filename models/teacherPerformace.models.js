// TeacherPerformance.model.js
import mongoose from "mongoose";

const TeacherPerformanceSchema = new mongoose.Schema({
  teacher_id: { type: Number, required: true },
  date: { type: Date, required: true },
  score: { type: Number },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const TeacherPerformance = mongoose.model(
  "TeacherPerformance",
  TeacherPerformanceSchema
);

export default TeacherPerformance;
