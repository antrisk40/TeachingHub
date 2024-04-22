import TeacherAttendance from "../models/TeacherAttendance.model.js";

export const markAttendance = async (req, res) => {
  try {
    const { teacher_id, course_id, duration, present, date } = req.body;
    const teacherAttendance = new TeacherAttendance({
      teacher_id,
      course_id,
      duration,
      present,
      date,
    });
    await teacherAttendance.save();
    res.status(201).json(teacherAttendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const attendance = await TeacherAttendance.find();
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const { teacher_id, course_id, duration, present, date } = req.body;
    const updatedAttendance = await TeacherAttendance.findByIdAndUpdate(
      req.params.id,
      { teacher_id, course_id, duration, present, date },
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
    const deletedAttendance = await TeacherAttendance.findByIdAndDelete(
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
