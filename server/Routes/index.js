const express = require("express");
const router = express.Router();
const path = require("path");

// Routers
const auth = require("./AuthRouter");
const studentRouter = require("./StudentRouter");
const academicianRouter = require("./AcademicianRouter");
const adminRouter = require("./AdminRouter");
const chatBotRouter = require("./ChatbotRouter");
const courseRouter = require("./CourseRouter");
const departmentRouter = require("./DepartmentRouter");
const facultyRouter = require("./FacultyRouter");
const seniorRouter = require("./SeniorGroupRouter");
const reportRouter = require("./ReportRouter");
const requestRouter = require("./RequestRouter");

// Routes
router.use("/auth", auth);
router.use("/student", studentRouter);
router.use("/senior", seniorRouter);
router.use("/faculty", facultyRouter);
router.use("/department", departmentRouter);
router.use("/course", courseRouter);
router.use("/academician", academicianRouter);
router.use("/admin", adminRouter);
router.use("/bot", chatBotRouter);
router.use("/report", reportRouter);
router.use("/request", requestRouter);
router.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = router;
