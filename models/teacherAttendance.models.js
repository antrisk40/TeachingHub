// TeacherAttendance.model.js
import mongoose from "mongoose";

const TeacherAttendanceSchema = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  duration: { type: Number },
  present: { type: Boolean },
  date: { type: Date },
});

const TeacherAttendance = mongoose.model(
  "TeacherAttendance",
  TeacherAttendanceSchema
);

export default TeacherAttendance;
