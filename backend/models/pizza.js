const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "pizza name required"],
  },
  price: {
    type: Number,
    required: [true, "pizza price required"],
  },
  image: {
    type: String,
    required: [true, "pizza image required"],
  },
  type: {
    type: String,
    required: [true, "pizza type required"],
    enum: ["veg", "non veg"],
  },
});

module.exports = mongoose.model("pizza", pizzaSchema);
