const Course = require("../Models/course");
const jwt = require("jsonwebtoken");
const Student = require("../Models/student");
const Academician = require("../Models/academician");

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
    const { day, filter } = req.query;

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id; // Make sure to declare userId using 'const' or 'let'
    const role = decoded.roles; // user role
    let user;
    let query = {};

    // If day is provided in the query, add it to the filter
    if (day) {
      query.day = day;
    }

    if (role.includes("Academician")) {
      user = await Academician.findOne({ user: userId });

      query.lecturer = userId;
    } else {
      user = await Student.findOne({ user: userId });

      query.student = userId;

      // compare student.lvl and course.year.
      if (filter === "current") {
        query.year = user.level; // Get courses for current or future years
      }
      if (filter === "past") {
        query.year = { $lt: user.level }; // Get courses for past years
      }
    }

    // Retrieve courses based on the constructed query
    const courses = await Course.find(query).populate({
      path: "lecturer",
      select: "firstName lastName",
    });

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
