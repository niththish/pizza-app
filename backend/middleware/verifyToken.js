const { verifyToken } = require("../config/token");

//middleware to verify whether the given token is valid or not to allow user to access application
const authVerification = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return next("token not present");
  }
  const token = authToken.split(" ")[1];
  try {
    const data = verifyToken(token);
    req.id = data.id;
    next();
  } catch (err) {
    return next(err.message);
  }
};

module.exports = authVerification;
