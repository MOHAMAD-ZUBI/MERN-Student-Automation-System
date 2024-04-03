const express = require("express");

const {
  getCurrentStudent,
  createStudent,
} = require("../Controllers/StudentController");

const router = express.Router();

router.get("/current", getCurrentStudent);
router.post("/create", createStudent);

module.exports = router;
