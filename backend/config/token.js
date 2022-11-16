const jwt = require("jsonwebtoken");

//to sign a new token
const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
  return token;
};

//to verify the token is vaild or not
const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    throw new Error("invalid token");
  }
};

module.exports = { signToken, verifyToken };
