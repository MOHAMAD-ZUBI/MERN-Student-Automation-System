const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatBotSchema = new Schema(
  {
    language: {
      type: String,
      default: "en"
    },
    question: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chatbot", chatBotSchema);
