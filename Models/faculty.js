const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  departments: {
    type: [],
  },
});

module.exports = mongoose.model(facultySchema, "Faculty");
