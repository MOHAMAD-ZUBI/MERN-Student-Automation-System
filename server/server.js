const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Routers
const auth = require("./Routes/AuthRouter");
const studentRouter = require("./Routes/StudentRouter");
const academicianRouter = require("./Routes/AcademicianRouter");
const adminRouter = require("./Routes/AdminRouter");
const chatBotRouter = require("./Routes/ChatbotRouter");
const courseRouter = require("./Routes/CourseRouter");
const departmentRouter = require("./Routes/DepartmentRouter");
const facultyRouter = require("./Routes/FacultyRouter");
const seniorRouter = require("./Routes/SeniorGroupRouter");
const reportRouter = require("./Routes/ReportRouter");
const cors = require("cors");

// Middlewares
const { isStudentUser } = require("./Middlewares/Roles");

const app = express();

app.use(cors());

app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/Senior")
  .then(() => {
    app.listen(3060, () => {
      console.log("server is on 3060");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// Routes
app.use("/api/auth", auth);
app.use("/api/student", studentRouter);
app.use("/api/senior", seniorRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/department", departmentRouter);
app.use("/api/course", courseRouter);
app.use("/api/academician", academicianRouter);
app.use("/api/admin", adminRouter);
app.use("/bot", chatBotRouter);
app.use("/api/report", reportRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
  return res.json("Hi");
});
