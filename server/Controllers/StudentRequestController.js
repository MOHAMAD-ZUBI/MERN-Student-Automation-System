const studentRequest = require('../Models/studentRequest');

// Create a new student request
const createStudentRequest = async (req, res) => {
    try {
        const newStudentRequest = new studentRequest(req.body);
        const savedStudentRequest = await newStudentRequest.save();
        res.status(201).json(savedStudentRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all student requests
const getAllStudentRequests = async (req, res) => {
    try {
        const studentRequests = await studentRequest.find();
        res.status(200).json(studentRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single student request by ID
const getStudentRequestById = async (req, res) => {
    try {
        const studentRequestId = req.params.id;
        const studentRequest = await studentRequest.findById(studentRequestId);
        if (!studentRequest) {
            return res.status(404).json({ message: 'Student request not found' });
        }
        res.status(200).json(studentRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a student request by ID
const updateStudentRequestById = async (req, res) => {
    try {
        const studentRequestId = req.params.id;
        const updatedStudentRequest = await studentRequest.findByIdAndUpdate(
            studentRequestId,
            req.body,
            { new: true }
        );
        if (!updatedStudentRequest) {
            return res.status(404).json({ message: 'Student request not found' });
        }
        res.status(200).json(updatedStudentRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a student request by ID
const deleteStudentRequestById = async (req, res) => {
    try {
        const studentRequestId = req.params.id;
        const deletedStudentRequest = await studentRequest.findByIdAndDelete(studentRequestId);
        if (!deletedStudentRequest) {
            return res.status(404).json({ message: 'Student request not found' });
        }
        res.status(200).json({ message: 'Student request deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStudentRequest,
    getAllStudentRequests,
    getStudentRequestById,
    updateStudentRequestById,
    deleteStudentRequestById,
};