const { Department, Worker, DepartmentCorse } = require("../Models/department");
const User = require("../Models/userMode");
const Student = require("../Models/student");
const Academician = require("../Models/academician");

// get all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get departments" });
  }
};

// get all departments
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const departments = await Department.findById(id);
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get department" });
  }
};

// get department based on user
const getDepartmentByUser = async (req, res) => {
  try {
    const user = req.user;
    let userDetails;

    if (user.permissions.includes("Academician")) {
      userDetails = await Academician.findOne({ user: user._id });
    } else {
      userDetails = await Student.findOne({ user: user._id });
    }
    const departments = await Department.findById(
      userDetails.departmentId
    ).populate("departmentHead");
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get department" });
  }
};

// add a worker to a department
const addWorker = async (req, res) => {
  try {
    const { name, email, phone, sex, position } = req.body;
    const newWorker = await Worker.create({
      name,
      email,
      phone,
      sex,
      position,
    });
    const department = await Department.findById(req.params.id);
    department.workers.push(newWorker);
    await department.save();
    return res.status(201).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// delete a corse from a department

const deleteDepartmentCorse = async (req, res) => {
  try {
    const { corseId } = req.query;
    const department = await Department.findById(req.params.id);
    const corse = await DepartmentCorse.findById(corseId);
    department.corses.pull({ _id: corseId });
    await department.save();
    res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// add a corse to a department
const addDepartmentCorse = async (req, res) => {
  try {
    const { name, code, year, semester } = req.body;
    const newWorker = await DepartmentCorse.create({
      name,
      code,
      year,
      semester,
    });
    const department = await Department.findById(req.params.id);
    department.corses.push(newWorker);
    await department.save();
    return res.status(201).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// delete a worker from a department

const deleteWorker = async (req, res) => {
  try {
    const { workerId } = req.query;
    const department = await Department.findById(req.params.id);
    const worker = await Worker.findById(workerId);
    department.workers.pull({ _id: workerId });
    await department.save();
    res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// create a new department
const createDepartment = async (req, res) => {
  try {
    const {
      name,
      departmentHead,
      description,
      faculty,
      achievements,
      workers,
      secretary,
      corses,
    } = req.body;
    const department = new Department({
      name,
      departmentHead,
      description,
      faculty,
      achievements,
      workers,
      secretary,
      corses,
    });
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a department
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, departmentHead, description, faculty, achievements } =
      req.body;
    const department = await Department.findByIdAndUpdate(
      id,
      { name, departmentHead, description, faculty, achievements },
      { new: true }
    );
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: "Failed to update department" });
  }
};

// delete a department
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    await Department.findByIdAndDelete(id);
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete department" });
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
  addWorker,
  deleteWorker,
  getDepartmentByUser,
  addDepartmentCorse,
  deleteDepartmentCorse,
};
