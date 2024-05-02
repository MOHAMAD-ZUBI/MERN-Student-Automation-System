const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaysOfWeek = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    group: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
    file: {
      type: [String],
    },
  },
  { timestamps: true }
);
const Note = mongoose.model("Note", noteSchema);

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
    enum: Object.keys(DaysOfWeek),
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
  Notes: [noteSchema],
});

const Course = mongoose.model("Course", courseSchema);

module.exports.Course = Course;
module.exports.Note = Note;
