const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  accountStatus: {
    type: String,
    default: "active",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
