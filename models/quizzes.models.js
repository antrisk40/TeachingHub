// Quiz.model.js
import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  quiz_id: { type: mongoose.Schema.Types.ObjectId, required: true },
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

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
