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

const corsesSchema = new Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  year: {
    type: String,
  },
  semester: {
    type: String,
  },
});

const secretarySchema = new Schema({
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
const Secretary = mongoose.model("Secretary", secretarySchema);
const Worker = mongoose.model("Worker", workerSchema);
const DepartmentCorse = mongoose.model("DepartmentCorse", corsesSchema);

module.exports.Worker = Worker;
module.exports.Secretary = Secretary;
module.exports.DepartmentCorse = DepartmentCorse;

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
    secretary: secretarySchema,
    workers: [workerSchema],
    corses: [corsesSchema],
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
