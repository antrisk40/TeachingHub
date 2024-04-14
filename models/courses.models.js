// Course.model.js
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  startedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  description: { type: String },
  price: { type: Number },
  starting_date: { type: Date },
  category: { type: String },
});

const Course = mongoose.model("Course", CourseSchema);

export default Course;
