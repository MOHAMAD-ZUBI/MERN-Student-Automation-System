const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workerSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  sex: {
    type: String,
  },
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports.Worker = Worker;

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    departmentHead: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    workers: [workerSchema],
    description: {
      type: String,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
    achievements: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

module.exports.Department = Department;
