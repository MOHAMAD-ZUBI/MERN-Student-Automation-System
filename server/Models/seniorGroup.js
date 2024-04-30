const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seniorGroupsSchema = new Schema(
  {
    title: {
      type: String,
    },
    lecturer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    students: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
    },
    // Files: file name, file type..
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seniorgroups", seniorGroupsSchema);
