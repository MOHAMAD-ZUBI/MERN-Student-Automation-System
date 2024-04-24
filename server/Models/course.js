const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
  },
  year: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
  lecturer: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
  },
  student: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
  },
});

module.exports = mongoose.model("Course", courseSchema);
