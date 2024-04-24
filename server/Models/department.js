const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    departmentHead: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    faculty: {
      type: mongoose.Types.ObjectId,
      ref: "Faculty",
    },
    achievements: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
