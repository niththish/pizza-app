const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const { signToken } = require("../config/token");

const {
  validateUsername,
  validatePassword,
} = require("../validations/userValidation");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  //checking for all values present in the request body
  if (!username || !password) {
    return next("required both username & password");
  }

  //username validation for minimum 4 characters
  const usernameValidation = validateUsername(username);
  if (usernameValidation) {
    return next(usernameValidation);
  }

  //password validation for minimum 8chars, uppercase, lowercase, number, symbol
  const passwordValidation = validatePassword(password);
  if (passwordValidation) {
    return next(passwordValidation);
  }

  const user = await userSchema.findOne({ username });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      const token = signToken({ id: user._id });
      res.json({ status: "login successful", token: token });
    } else {
      return next("invalid password");
    }
  } else {
    return next("username not found");
  }
};

module.exports = login;
