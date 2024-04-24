const express = require("express");

const {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../Controllers/departmentController");

const router = express.Router();

router.get("/:id", getDepartmentById);
router.get("/list", getAllDepartments);
router.post("/create", createDepartment);
router.put("/update", updateDepartment);
router.delete("/delete/:id", deleteDepartment);

module.exports = router;
