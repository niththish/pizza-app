const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  line1: {
    type: String,
    required: [true, "line1 address is required"],
  },
  line2: {
    type: String,
    required: [true, "line2 address is required"],
  },
  city: {
    type: String,
    required: [true, "city is required"],
  },
});

module.exports = addressSchema;
