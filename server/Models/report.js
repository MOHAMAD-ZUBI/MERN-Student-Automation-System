const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
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
      ref: "Seniorgroups",
    },
    file: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
