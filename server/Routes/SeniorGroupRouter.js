const express = require("express");

const {
  createSeniorGroup,
  getLecturerSeniorGroups,
  getSeniorGroupById,
  updateSeniorGroupById,
  deleteSeniorGroupById,
  addStudentToGroup,
  removeStudentFromGroup,
  getStudentSeniorGroup,
  getGroupReports,
  lecturerStudents,
} = require("../Controllers/SeniorController");
const { authenticateUser } = require("../Middlewares/Auth");

const router = express.Router();

router.get("/lecturer/list", authenticateUser, getLecturerSeniorGroups);
router.get("/studentGroup", authenticateUser, getStudentSeniorGroup);
router.get("/lecturer/students", authenticateUser, lecturerStudents);
router.get("/files/:id", getGroupReports);
router.post("/addStudent/:groupId", addStudentToGroup);
router.delete("/removeStudent/:groupId", removeStudentFromGroup);
router.get("/:id", getSeniorGroupById);
router.post("/create", createSeniorGroup);
router.put("/update/:id", updateSeniorGroupById);
router.delete("/delete/:id", deleteSeniorGroupById);

module.exports = router;
