const Department = require("../Models/department");

// get all departments
const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: "Failed to get departments" });
    }
};

// create a new department
const createDepartment = async (req, res) => {
    try {
        const { name, departmentHead, description, faculty, achievements } = req.body;
        const department = new Department({
            name,
            departmentHead,
            description,
            faculty,
            achievements,
        });
        await department.save();
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: "Failed to create department" });
    }
};

// update a department
const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, departmentHead, description, faculty, achievements } = req.body;
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
    createDepartment,
    updateDepartment,
    deleteDepartment,
};