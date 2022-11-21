const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "pizza",
    required: [true, "productId is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity of pizza is required"],
    min: [1, "quantity must be atleat 1"],
    max: [10, "quantity cannot be more than 10"],
  },
  price: {
    type: Number,
  },
  name: {
    type: String,
    required: [true, "pizza name required"],
  },
});

module.exports = cartSchema;
