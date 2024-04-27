const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    yearOfStudy: {
      type: String,
    },
    gpa: {
      type: Number,
    },
    agpa: {
      type: Number,
    },
    department: {
      type: String,
    },
    departmentId: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
    },
    faculty: {
      type: String,
    },
    sex: {
      type: String,
    },
    level: {
      type: Number,
      deafult: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
