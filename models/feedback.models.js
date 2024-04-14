// Feedback.model.js
import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  description: { type: String },
  rating: { type: Number },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
