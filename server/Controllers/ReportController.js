const Report = require("../Models/report");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

// get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: "Failed to get reports" });
  }
};

// create a new report
const createReport = async (req, res) => {
  try {
    const { title, description, group } = req.body;
    const uploadedFilePath = req.file.path;
    const report = new Report({
      title,
      description,
      group,
      file: uploadedFilePath,
    });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: "Failed to create report" });
  }
};

// delete a report
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await Report.findByIdAndDelete(id);
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete report" });
  }
};

module.exports = {
  getAllReports,
  createReport,
  deleteReport,
};
