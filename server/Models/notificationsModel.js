const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Types = {
  systemUpdate: "systemUpdate:",
  requestUpdate: "requestUpdate",
  announcement: "announcement",
  seniorReport: "seniorReport",
};

const notificationSchema = new Schema(
  {
    type: {
      type: [String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "unread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(notificationSchema, "Notifications");
module.exports.Types = Types;
