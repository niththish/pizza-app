const signup = async (req, res, next) => {
  const { username, password, email, mobile, address } = req.body;

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

  res.json("works");
};

const validateUsername = (username) => {
  const pattern = "^[a-zA-Z]{4,}$";
  const test = new RegExp(pattern).test(username);
  if (!test) {
    return "username must have alpha characters";
  }
  return;
};

const validatePassword = (password) => {
  if (password.length < 8)
    return "password length should be greater than 8 characters";
  const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const test = new RegExp(pattern).test(password);
  if (!test) {
    return "password should contain uppercase, lowercase, digit, special character";
  }
  return;
};

const validateEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/;
  const test = new RegExp(pattern).test(email);
  if (!test) {
    return "invalid email id";
  }
  return;
};

const validateMobile = (mobile) => {
  const pattern = /\d{10}/;
  const test = new RegExp(pattern).test(mobile);
  if (!test) {
    return "invalid mobile number";
  }
};

module.exports = signup;
