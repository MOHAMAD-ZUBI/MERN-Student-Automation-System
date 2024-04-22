const express = require("express");
const mongoose = require("mongoose");

// Routers
const auth = require("./Routes/AuthRouter");
const studentRouter = require("./Routes/StudentRouter");
const academicianRouter = require("./Routes/AcademicianRouter");
const adminRouter = require("./Routes/AdminRouter");
const chatBotRouter = require("./Routes/ChatbotRouter");
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
app.use("/api/student", isStudentUser, studentRouter);
app.use("/api/academician", academicianRouter);
app.use("/api/admin", adminRouter);
app.use("/bot", chatBotRouter);
app.get("/", (req, res) => {
  return res.json("Hi");
});
