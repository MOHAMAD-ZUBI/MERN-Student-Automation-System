const express = require("express");

const {
  getAllFaculties,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} = require("../Controllers/FacultyController");

const router = express.Router();

router.post("/create", createFaculty);
router.get("/:id", getFacultyById);
router.get("/list", getAllFaculties);
router.put("/update", updateFaculty);
router.delete("/delete/:id", deleteFaculty);

module.exports = router;
