const userSchema = require("../models/user");
const {
  validateUsername,
  validatePassword,
  validateEmail,
  validateMobile,
} = require("../validations/userValidation");

const updateUserController = async (req, res, next) => {
  const _id = req.id;
  const patchData = req.body;

  //username validation for minimum 4 characters
  if (patchData.username) {
    const userValidation = validateUsername(patchData.username);
    if (userValidation) {
      return next(userValidation);
    }
  }

  //password validation for minimum 8chars, uppercase, lowercase, number, symbol
  if (patchData.password) {
    const passwordValidation = validatePassword(patchData.password);
    if (passwordValidation) {
      return next(passwordValidation);
    }
  }

  //email validation for correct email format
  if (patchData.email) {
    const emailValidation = validateEmail(patchData.email);
    if (emailValidation) {
      return next(emailValidation);
    }
  }

  //mobile number validation for 10 digit number
  if (patchData.mobile) {
    const mobileValidation = validateMobile(patchData.mobile);
    if (mobileValidation) {
      return next(mobileValidation);
    }
  }

  const updatedData = await userSchema.findByIdAndUpdate(
    _id,
    { $set: patchData },
    { new: true, runValidators: true }
  );

  if (updatedData) {
    res.json({ status: "updated successfully" });
  } else {
    return next("invalid user");
  }
};

module.exports = updateUserController;
