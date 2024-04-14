// Assignment.model.js
import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  marks: { type: Number },
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);

export default Assignment;
