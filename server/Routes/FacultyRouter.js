const express = require("express");

const {
  getAllFaculties,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} = require("../Controllers/FacultyController");

const router = express.Router();

router.get("/list", getAllFaculties);
router.get("/:id", getFacultyById);
router.post("/create", createFaculty);
router.put("/update", updateFaculty);
router.delete("/delete/:id", deleteFaculty);

module.exports = router;
