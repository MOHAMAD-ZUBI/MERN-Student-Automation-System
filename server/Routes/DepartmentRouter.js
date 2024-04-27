const express = require("express");

const {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
  addWorker,
  deleteWorker,
} = require("../Controllers/departmentController");

const router = express.Router();

router.get("/list", getAllDepartments);
router.get("/:id", getDepartmentById);
router.post("/addWorker/:id", addWorker);
router.delete("/deleteWorker/:id", deleteWorker);
router.post("/create", createDepartment);
router.put("/update/:id", updateDepartment);
router.delete("/delete/:id", deleteDepartment);

module.exports = router;
