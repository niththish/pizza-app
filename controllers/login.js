const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");

const {
  validateUsername,
  validatePassword,
} = require("../validations/userValidation");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  //checking for all values present in the request body
  if (!username || !password) {
    return next("required all information");
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

  //checking for user exists in the database
  const user = await userSchema.findOne({ username });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      res.json({ status: "login successfull" });
    } else {
      return next("password is wrong");
    }
  } else {
    return next("user not found");
  }
};

module.exports = login;
