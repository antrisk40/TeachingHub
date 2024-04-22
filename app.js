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
import errorMiddleware from "./middleware/error.middlewre.js";


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

     // Start the server
     app.listen(process.env.PORT, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));


    // Mount student routes
    app.use("/api/v1/student", studentRoutes);
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
    
    app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
    });
    

    app.use(errorMiddleware)

   
