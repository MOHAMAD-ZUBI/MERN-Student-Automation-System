const Faculty = require("../Models/faculty")

// get all faculties
const getAllFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ error: "Failed to get faculties" });
    }
};

// create a new faculty
const createFaculty = async (req, res) => {
    try {
        const { name, description } = req.body;
        const faculty = new Faculty({
            name,
            description,
        });
        await faculty.save();
        res.status(201).json(faculty);
    } catch (error) {
        res.status(500).json({ error: "Failed to create faculty" });
    }
};

// update a faculty
const updateFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const faculty = await Faculty.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ error: "Failed to update faculty" });
    }
};

// delete a faculty
const deleteFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        await Faculty.findByIdAndDelete(id);
        res.status(200).json({ message: "Faculty deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete faculty" });
    }
};

module.exports = {
    getAllFaculties,
    createFaculty,
    updateFaculty,
    deleteFaculty,
};