// app.mjs
import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.routes.js";
import StudentModel from "./models/student.models.js";
import StudentLiveClassPerformance from "./models/studentLiveClassPerformance.js";
import StudentPerformance from "./models/studentPerformance.models.js";
import StudentAttendance from "./models/studentAttendance.models.js";
import Teacher from "./models/teacher.models.js";
import TeacherAttendance from "./models/teacherAttendance.models.js";
import TeacherPerformance from "./models/teacherPerformace.models.js";
import Assignment from "./models/assignments.models.js";
import Enrolled from "./models/enrolled.models.js";
import Feedback from "./models/feedback.models.js";
import Quiz from "./models/quizzes.models.js";
import Video from "./models/videos.models.js"
import Course from "./models/courses.models.js";

const app = express();
app.use(express.json());

// Root route handler
app.get("/", (req, res) => {
  res.send("Welcome to the Teaching Hub!");
});

mongoose
  .connect("mongodb://localhost:27017/TeachingHub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Define all the models
    const models = [
      StudentModel,
      StudentLiveClassPerformance,
      StudentPerformance,
      StudentAttendance,
      Teacher,
      TeacherAttendance,
      TeacherPerformance,
      Assignment,
      Enrolled,
      Feedback,Quiz,
      Video,
      Course,
    ];

    // Create all the collections
    for (const model of models) {
      await model.createCollection();
      console.log(`Collection created for ${model.modelName}`);
    }

    // Mount student routes
    app.use("/students", studentRoutes);

    // Start the server
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
