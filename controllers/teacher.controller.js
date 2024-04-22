import Teacher from "../models/Teacher.model.js";

export const createTeacher = async (req, res) => {
  try {
    const {
      teacher_id,
      teacher_name,
      institute,
      photo,
      joining_date,
      category,
      email,
      phone_number,
      password,
    } = req.body;
    const teacher = new Teacher({
      teacher_id,
      teacher_name,
      institute,
      photo,
      joining_date,
      category,
      email,
      phone_number,
      password,
    });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const {
      teacher_name,
      institute,
      photo,
      joining_date,
      category,
      email,
      phone_number,
      password,
    } = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      {
        teacher_name,
        institute,
        photo,
        joining_date,
        category,
        email,
        phone_number,
        password,
      },
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
