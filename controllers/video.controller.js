import Video from "../models/Video.model.js";

export const createVideo = async (req, res) => {
  try {
    const { course_id, time, duration, link, date } = req.body;
    const video = new Video({ course_id, time, duration, link, date });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const { course_id, time, duration, link, date } = req.body;
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { course_id, time, duration, link, date },
      { new: true }
    );
    if (!updatedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(updatedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
