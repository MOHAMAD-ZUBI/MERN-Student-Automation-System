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
  officeNo: {
    type: String,
  },
  officeHours: {
    type: [String],
  },
  graduatedUni: {
    type: String,
  },
  position: {
    type: String,
  },
});

module.exports = mongoose.model(academicianSchema, "Academician");
