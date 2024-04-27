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

module.exports.Worker = Worker;
module.exports.Secretary = Secretary;

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
