import StudentPerformance from "../models/StudentPerformance.model.js";

export const recordPerformance = async (req, res) => {
  try {
    const { student_id, date, score, course_id } = req.body;
    const performance = new StudentPerformance({
      student_id,
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

export const getPerformance = async (req, res) => {
  try {
    const performance = await StudentPerformance.find();
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePerformance = async (req, res) => {
  try {
    const { student_id, date, score, course_id } = req.body;
    const updatedPerformance = await StudentPerformance.findByIdAndUpdate(
      req.params.id,
      { student_id, date, score, course_id },
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
    const deletedPerformance = await StudentPerformance.findByIdAndDelete(
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
