// Enrolled.model.js
import mongoose from "mongoose";

const EnrolledSchema = new mongoose.Schema({
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
});

const Enrolled = mongoose.model("Enrolled", EnrolledSchema);

export default Enrolled;
