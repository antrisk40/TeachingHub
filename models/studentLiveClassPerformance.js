// StudentLiveClassPerformance.model.js
import mongoose from "mongoose";

const StudentLiveClassPerformanceSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  duration: { type: Number },
  quiz_attempted: { type: Number },
  quiz_marks: { type: Number },
});

const StudentLiveClassPerformance = mongoose.model(
  "StudentLiveClassPerformance",
  StudentLiveClassPerformanceSchema
);

export default StudentLiveClassPerformance;
