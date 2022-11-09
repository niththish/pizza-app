const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const addressSchema = require("./address");
const cartSchema = require("./cart");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username required"],
    minLength: [4, "username must be atleast 4 characters"],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  email: {
    type: String,
    required: [true, "email required"],
  },
  mobile: {
    type: String,
    required: [true, "mobile number required"],
  },
  address: addressSchema,
  cart: cartSchema,
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("user", userSchema);
