const express = require("express");

const {
  getAllCourses,
  getMyCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../Controllers/CourseController");

const router = express.Router();

router.get("/list", getAllCourses);
router.get("/:id", getCourseById);
router.get("/list/mine", getMyCourses);
router.post("/create", createCourse);
router.put("/update", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
