const express = require("express");

const {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../Controllers/departmentController");

const router = express.Router();

router.get("/list", getAllDepartments);
router.get("/:id", getDepartmentById);
router.post("/create", createDepartment);
router.put("/update/:id", updateDepartment);
router.delete("/delete/:id", deleteDepartment);

module.exports = router;
