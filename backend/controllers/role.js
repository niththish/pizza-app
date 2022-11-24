const userSchema = require("../models/user");

const userRoleController = async (req, res, next) => {
  const _id = req.id;
  const role = await userSchema.findOne({ _id }, { role: 1 });
  res.json({ role: role.role });
};

module.exports = userRoleController;
