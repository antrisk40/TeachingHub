import TeacherPerformance from "../models/TeacherPerformance.model.js";

export const createPerformance = async (req, res) => {
  try {
    const { teacher_id, date, score, course_id } = req.body;
    const performance = new TeacherPerformance({
      teacher_id,
      date,
      score,
      course_id,
    });
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPerformances = async (req, res) => {
  try {
    const performances = await TeacherPerformance.find();
    res.json(performances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePerformance = async (req, res) => {
  try {
    const { teacher_id, date, score, course_id } = req.body;
    const updatedPerformance = await TeacherPerformance.findByIdAndUpdate(
      req.params.id,
      { teacher_id, date, score, course_id },
      { new: true }
    );
    if (!updatedPerformance) {
      return res.status(404).json({ message: "Performance not found" });
    }
    res.json(updatedPerformance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePerformance = async (req, res) => {
  try {
    const deletedPerformance = await TeacherPerformance.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPerformance) {
      return res.status(404).json({ message: "Performance not found" });
    }
    res.json({ message: "Performance deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
