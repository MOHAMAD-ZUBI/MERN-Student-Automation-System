const studentRequest = require("../Models/studentRequest");
const User = require("../Models/User/userMode");
const Student = require("../Models/User/student");
const Academician = require("../Models/User/academician");
const fs = require("fs").promises;

// Create a new student request
const createStudentRequest = async (req, res) => {
  try {
    const user = req.user;
    const uploadedFilePath = req.file.path;
    const { type, content, receiver } = req.body;
    const receiverUser = await User.findOne({ _id: receiver });
    if (!receiverUser) {
      return res.status(404).json({ message: "Receiver not found" });
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
    const user = req.user;
    const { type, status, page } = req.query;
    const pageSize = 7;
    let query = {};

    query.receiver = user._id;

    if (type) {
      query.type = type;
    }

    if (status) {
      query.status = status;
    }

    const totalCount = await studentRequest.countDocuments(query);
    const totalPages = Math.ceil(totalCount / pageSize);

    const studentRequests = await studentRequest
      .find(query)
      .populate("sender")
      .populate("receiver")
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      studentRequests,
      page,
      pageSize,
      totalCount,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRequestsForStudent = async (req, res) => {
  try {
    const user = req.user;
    const { type, status, page } = req.query;
    const pageSize = 7;
    let query = {};

    query.sender = user._id;

    if (type) {
      query.type = type;
    }

    if (status) {
      query.status = status;
    }

    const totalCount = await studentRequest.countDocuments(query);
    const totalPages = Math.ceil(totalCount / pageSize);

    const studentRequests = await studentRequest
      .find(query)
      .populate("sender")
      .populate("receiver")
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      studentRequests,
      page,
      pageSize,
      totalCount,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLecturersForDepartment = async (req, res) => {
  try {
    const user = req.user;

    const student = await Student.findOne({ user: user._id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!student.departmentId) {
      return res
        .status(404)
        .json({ message: "Student don't have a department" });
    }

    const academicians = await Academician.find(
      {
        departmentId: student.departmentId,
      },
      "-password -__v -academicInformation"
    ).populate("user", "firstName lastName");

    res.status(200).json(academicians);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showSingleRequestForStudent = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const studentRequestToShow = await studentRequest
      .findOne({ _id: id, sender: user._id })
      .populate("receiver");
    if (!studentRequestToShow) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json(studentRequestToShow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const replyToRequest = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { reply } = req.body;
    const studentRequestToUpdate = await studentRequest.findOneAndUpdate(
      { _id: id },
      { receiverReply: reply, status: "replied" },
      { new: true }
    );
    if (!studentRequestToUpdate) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json(studentRequestToUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showSingleRequest = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const studentRequestToShow = await studentRequest
      .findOne({ _id: id, receiver: user._id })
      .populate("sender");
    if (!studentRequestToShow) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json(studentRequestToShow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all student requests for global
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
      return res.status(404).json({ message: "Student request not found" });
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
      return res.status(404).json({ message: "Student request not found" });
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
    const deletedStudentRequest = await studentRequest.findByIdAndDelete(
      studentRequestId
    );
    if (!deletedStudentRequest) {
      return res.status(404).json({ message: "Student request not found" });
    }
    res.status(200).json({ message: "Student request deleted successfully" });
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
  getRequestsForStudent,
  showSingleRequestForStudent,
  getLecturersForDepartment,
};
