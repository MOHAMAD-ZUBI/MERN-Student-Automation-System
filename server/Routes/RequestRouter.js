const multer = require("multer");
const express = require("express");
const path = require("path");
const { authenticateUser } = require("../Middlewares/Auth");
const requestRouter = express.Router();
const {
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
} = require("../Controllers/StudentRequestController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// lecturer
requestRouter.get("/single/lecturer/:id", authenticateUser, showSingleRequest); //
requestRouter.get("/lecturer/:id", authenticateUser, getRequestsForLecturer);
requestRouter.put("/reply/:id", authenticateUser, replyToRequest); //

// student
requestRouter.post(
  "/create",
  upload.single("file"),
  authenticateUser,
  createStudentRequest
);
requestRouter.get("/student/:id", authenticateUser, getRequestsForStudent);
requestRouter.get(
  "/single/student/:id",
  authenticateUser,
  showSingleRequestForStudent
);

//
requestRouter.get("/", getAllStudentRequests);
requestRouter.get("/:id", getStudentRequestById);
requestRouter.put("/:id", updateStudentRequestById);
requestRouter.delete("/:id", deleteStudentRequestById);

module.exports = requestRouter;
