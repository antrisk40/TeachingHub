// Student.models.js
import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  student_name: { type: String, required: true },
  institute: { type: String },
  photo: { type: String },
  joining_date: { type: Date },
  email: { type: String },
  phone_number: { type: Number, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
