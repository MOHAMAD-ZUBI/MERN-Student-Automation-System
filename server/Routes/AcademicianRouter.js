const express = require("express");
const router = express.Router();
const {
  getCurrentAcademician,
  createAcademician,
} = require("../Controllers/AcademicianController");

router.get("/current", getCurrentAcademician);
router.post("/create", createAcademician);

module.exports = router;
