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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
