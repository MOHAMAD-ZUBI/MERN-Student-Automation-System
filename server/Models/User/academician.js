const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// öğretim görevlisi, araştırma görevlisi, uzman, okutman, yardımcı doçent, doçent ve profesör
const Positions = {
  Prof: "Prof",
  Doc: "Doc",
  researchAssistant: "research assistant",
  assistantProfessor: "assistant professor",
  associateProfessor: "associate professor",
};

const academicianSchema = new Schema({
  employmentHistory: {
    type: String,
  },

  name: {
    Type: String,
  },
  officeNo: {
    type: String,
  },
  officeHours: {
    type: [String],
  },
  academicInformation: {
    type: [String],
  },
  graduatedUni: {
    type: String,
  },
  position: {
    type: String,
    default: "Dr.",
  },
  departmentId: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Academician", academicianSchema);
