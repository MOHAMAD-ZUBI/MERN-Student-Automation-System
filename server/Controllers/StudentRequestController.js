const studentRequest = require('../Models/studentRequest');
const User = require('../Models/userMode')
const fs = require('fs').promises

// Create a new student request
const createStudentRequest = async (req, res) => {
    try {
        const user = req.user
        const uploadedFilePath = req.file.path;
        const {type, content, receiver  } = req.body
        const receiverUser = await User.findOne({ _id: receiver })
        if (!receiverUser) {
            return res.status(404).json({ message: 'Receiver not found' });
        }

        const newStudentRequest = new studentRequest({
            type,
            content,
            sender: user._id,
            receiver: receiverUser._id,
            file: uploadedFilePath,
        });

        const savedStudentRequest = await newStudentRequest.save();
        res.status(201).json(savedStudentRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRequestsForLecturer = async (req, res) => {
    try {
        const user = req.user
        const studentRequests = await studentRequest.find({ receiver: user._id }).populate('sender');
        res.status(200).json(studentRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getRequestsForStudent = async (req, res) => {
    try {
        const user = req.user
        const studentRequests = await studentRequest.find({ sender: user._id }).populate('receiver');
        res.status(200).json(studentRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const showSingleRequestForStudent = async(req,res) => {
    try {
        const user = req.user;
        const { requestId } = req.params;
        const studentRequestToShow = await studentRequest.findOne({ _id: requestId, sender: user._id }).populate('receiver');
        if (!studentRequestToShow) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json(studentRequestToShow);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const replyToRequest = async (req, res) => {
    try {
        const user = req.user
        const { reply, requestId } = req.body
        const studentRequestToReply = await studentRequest({ _id: requestId })
        if (!studentRequestToReply) {
            return res.status(404).json({ message: 'Request not found' });
        }
        studentRequestToReply.receiverReply = reply
        studentRequestToReply.status = 'replied'
        const updatedStudentRequest = await studentRequestToReply.save()
        res.status(200).json(updatedStudentRequest)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const filterRequests = async (req, res) => {
    try {
        const user = req.user
        const { type, status } = req.query
        const studentRequests = await studentRequest.find({ receiver: user._id, type, status })
        res.status(200).json(studentRequests)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const showSingleRequest = async (req, res) => {
    try {
        const user = req.user;
        const { requestId } = req.params;
        const studentRequestToShow = await studentRequest.findOne({ _id: requestId, receiver: user._id }).populate('sender');
        if (!studentRequestToShow) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json(studentRequestToShow);
    }
    catch (error) {
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
    showSingleRequest,
    getRequestsForLecturer,
    replyToRequest,
    filterRequests,
    getRequestsForStudent,
    showSingleRequestForStudent
};