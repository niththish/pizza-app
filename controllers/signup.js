const userSchema = require("../models/user");
const {
  validateUsername,
  validatePassword,
  validateEmail,
  validateMobile,
} = require("../validations/userValidation");

const signup = async (req, res, next) => {
  const { username, password, email, mobile, address } = req.body;

  //checking for all values present in the request body
  if (!username || !password || !email || !mobile || !address) {
    return next("required all information");
  }

  //username validation for minimum 4 characters
  const usernameValidation = validateUsername(username);
  if (usernameValidation) {
    return next(usernameValidation);
  }

  //password validation for minimum 8chars, uppercase, lowercase, number, symbol
  const passValidation = validatePassword(password);
  if (passValidation) {
    return next(passValidation);
  }

  //email validation for correct email format
  const emailValidation = validateEmail(email);
  if (emailValidation) {
    return next(emailValidation);
  }

  //mobile number validation for 10 digit number
  const mobileValidation = validateMobile(mobile);
  if (mobileValidation) {
    return next(mobileValidation);
  }

  //checking for user account already exists in the database
  const user = await userSchema.findOne({
    $or: [{ username }, { email }, { mobile }],
  });
  if (user) {
    if (user.username === username) return next("username already exists");
    if (user.email === email) return next("email id already exists");
    if (user.mobile === mobile) return next("mobile number already exists");
  }

  //creating a new user account
  await userSchema.create({ username, password, email, mobile, address });
  res.json({ status: "user registered successfully" });
};

module.exports = signup;
