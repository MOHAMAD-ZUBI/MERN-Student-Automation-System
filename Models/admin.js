const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user: {
    Type: mongoose.Types.ObjectId,
    ref: "User",
  },
  accountStatus: {
    type: String,
    default: "active",
  },
});

module.exports = mongoose.model(adminSchema, "Admin");
