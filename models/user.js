const mongoose = require("mongoose");
const addressSchema = require("./address");

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
});
