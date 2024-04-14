// Video.model.js
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  time: { type: Date },
  duration: { type: Number },
  link: { type: String },
  date: { type: Date },
});

const Video = mongoose.model("Video", VideoSchema);

export default Video;
