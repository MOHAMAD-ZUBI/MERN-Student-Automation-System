const express = require("express");
const router = express.Router();
const {
  getCurrentAcademician,
  createAcademician,
  getAcademicianById,
} = require("../Controllers/AcademicianController");

router.get("/current", getCurrentAcademician);
router.post("/create", createAcademician);
router.get("/:id", getAcademicianById);

module.exports = router;
