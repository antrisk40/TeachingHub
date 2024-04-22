import StudentAttendance from "../models/StudentAttendance.model.js";

export const markAttendance = async (req, res) => {
  try {
    const { student_id, course_id, duration, present, date } = req.body;
    const attendance = new StudentAttendance({
      student_id,
      course_id,
      duration,
      present,
      date,
    });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const attendance = await StudentAttendance.find();
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const { student_id, course_id, duration, present, date } = req.body;
    const updatedAttendance = await StudentAttendance.findByIdAndUpdate(
      req.params.id,
      { student_id, course_id, duration, present, date },
      { new: true }
    );
    if (!updatedAttendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.json(updatedAttendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const deletedAttendance = await StudentAttendance.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAttendance) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.json({ message: "Attendance deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
