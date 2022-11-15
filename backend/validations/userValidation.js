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

module.exports = {
  validateUsername,
  validatePassword,
  validateEmail,
  validateMobile,
};
