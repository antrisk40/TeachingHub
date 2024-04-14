// StudentAttendance.model.js
import mongoose from "mongoose";

const StudentAttendanceSchema = new mongoose.Schema({
  student_id: { type: Number, required: true },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  duration: { type: Number },
  present: { type: Boolean },
  date: { type: Date },
});

const StudentAttendance = mongoose.model(
  "StudentAttendance",
  StudentAttendanceSchema
);

export default StudentAttendance;
