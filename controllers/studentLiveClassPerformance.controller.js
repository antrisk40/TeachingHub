import StudentLiveClassPerformance from "../models/StudentLiveClassPerformance.model.js";

export const recordPerformance = async (req, res) => {
  try {
    const { student_id, duration, quiz_attempted, quiz_marks } = req.body;
    const performance = new StudentLiveClassPerformance({
      student_id,
      duration,
      quiz_attempted,
      quiz_marks,
    });
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPerformance = async (req, res) => {
  try {
    const performance = await StudentLiveClassPerformance.find();
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePerformance = async (req, res) => {
  try {
    const { student_id, duration, quiz_attempted, quiz_marks } = req.body;
    const updatedPerformance =
      await StudentLiveClassPerformance.findByIdAndUpdate(
        req.params.id,
        { student_id, duration, quiz_attempted, quiz_marks },
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
    const deletedPerformance =
      await StudentLiveClassPerformance.findByIdAndDelete(req.params.id);
    if (!deletedPerformance) {
      return res.status(404).json({ message: "Performance not found" });
    }
    res.json({ message: "Performance deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
