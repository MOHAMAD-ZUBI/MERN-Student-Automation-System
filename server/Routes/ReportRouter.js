const multer = require("multer");
const express = require("express");
const path = require("path");
const reportRouter = express.Router();
const { createReport } = require("../Controllers/ReportController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

reportRouter.post("/create", upload.single("report"), createReport);

module.exports = reportRouter;
