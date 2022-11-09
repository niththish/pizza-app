const signup = async (req, res, next) => {
  const { username, password, email, mobile, address } = req.body;
  console.log(username, password, email, mobile, address);
  res.json("signup initial");
};

module.exports = signup;
