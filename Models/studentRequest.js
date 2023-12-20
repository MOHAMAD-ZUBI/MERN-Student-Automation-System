const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Types = {
  internship: "internship",
  gradeObjection: "gradeObjection",
  recommendationLetter: "recommendationLetter",
};

const studentRequestSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(Types),
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      enum: ["replied", "unreplied"],
      default: "unreplied",
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    receiverReply: {
      type: String,
    },
    file: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(studentRequestSchema, "Studentrequest");
module.exports.Types = Types;
