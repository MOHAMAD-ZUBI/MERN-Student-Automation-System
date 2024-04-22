const User = require("../Models/userMode");
const Student = require("../Models/student");
const jwt = require("jsonwebtoken");

const getProfileData = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ msg: "No such user" });
  } catch (error) {}
};

const createStudent = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    const { gpa, yearOfStudy } = req.body;

    if (!gpa || !yearOfStudy)
      return res.status(401).json("all fields are required");
    const student = await Student.create({ gpa, yearOfStudy, user: user._id });
    return res.status(200).json(student);
  } catch (error) {
    return res.status(401).json({ error: error.msg });
  }
};

const getCurrentStudent = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ msg: "No such user" });
    }

    const student = await Student.findOne({ user: user._id });

    if (!student) {
      return res.status(401).json({ msg: "No such student" });
    }

    return res.status(200).json({ data: student, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

// STUDENT
// get student schedule
// get students current courses (Seamster courses)
// get the student information (name, department, agno, class..)
// get student requests

// LECTURER
// get lecturer schedule
// get lecturers current courses
// get the lecturer information
// get the requests

module.exports = {
  createStudent,
  getCurrentStudent,
};
