const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: {
    Type: String,
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

module.exports = mongoose.model(courseSchema, "Courses");
