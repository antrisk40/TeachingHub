// Teacher.model.js
import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  teacher_id: { type: Number, required: true, unique: true },
  teacher_name: { type: String, required: true },
  institute: { type: String },
  photo: { type: String },
  joining_date: { type: Date },
  category: { type: String },
  email: { type: String },
  phone_number: { type: Number, required: true, maxlength: 10 },
  password: { type: String, required: true },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

export default Teacher;
