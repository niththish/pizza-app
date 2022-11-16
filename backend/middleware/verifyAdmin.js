const userSchema = require("../models/user");

//middleware to check whether the user is admin or not to restrict access
const adminVerification = async (req, res, next) => {
  const _id = req.id;
  const user = await userSchema.findOne({ _id });
  if (user.role === "admin") {
    next();
  } else {
    return next("you are not authorized access this information");
  }
};

module.exports = adminVerification;
