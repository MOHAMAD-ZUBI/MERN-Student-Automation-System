const Course = require("../Models/course");
const jwt = require("jsonwebtoken");

// get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Failed to get courses" });
  }
};

// get my courses
const getMyCourses = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id; // Make sure to declare userId using 'const' or 'let'
    // console.log(userId);
    const { day } = req.query;

    let courses;
    if (day) {
      courses = await Course.find({ student: userId, day }).populate(
        "lecturer"
      );
    } else {
      courses = await Course.find({ student: userId }).populate("lecturer", [
        "name",
        "Position",
      ]);
    }

    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get courses" });
  }
};

// create a new course
const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCode,
      credit,
      year,
      term,
      day,
      time,
      department,
      lecturer,
      student,
    } = req.body;

    const course = new Course({
      courseName,
      courseCode,
      credit,
      year,
      term,
      day,
      time,
      department,
      lecturer,
      student,
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create course" });
  }
};

// update a course

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseName, credit, year, term, department, lecturer, student } =
      req.body;
    const course = await Course.findByIdAndUpdate(
      id,
      { courseName, credit, year, term, department, lecturer, student },
      { new: true }
    );
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update course" });
  }
};

// delete a course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete course" });
  }
};

// get by Id
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: "Failed to get course" });
  }
};

// export
module.exports = {
  getAllCourses,
  getMyCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
};
