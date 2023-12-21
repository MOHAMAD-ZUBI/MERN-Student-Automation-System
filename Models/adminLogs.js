const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminLogsSchema = new Schema(
  {
    type: {
      Type: String,
    },
    content: {
      Type: String,
    },
    user: {
      Type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(adminLogsSchema, "Adminlog");
