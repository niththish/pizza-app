const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customerId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: [true, "customer id required"],
  },
  items: [pizzaItem],
});

const pizzaItem = mongoose.Schema({
  name: {
    type: String,
    required: [true, "item name required"],
  },
  price: {
    type: Number,
    required: [true, "item price required"],
  },
  quantity: {
    type: Number,
    required: [true, "item quantity required"],
  },
});

module.exports = mongoose.Mongoose.model("order", orderSchema);
