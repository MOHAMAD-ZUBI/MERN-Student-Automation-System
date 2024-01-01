const express = require("express");

const { getCurrentStudent } = require("../Controllers/StudentController");

const router = express.Router();

router.get("/current", getCurrentStudent);

module.exports = router;
