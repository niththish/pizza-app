const userSchema = require("../models/user");

const userOrders = async (req, res, next) => {
  const _id = req.id;
  const orders = await userSchema.findOne({ _id }, { cart: 1 });
  if (orders) {
    res.json({ orders });
  } else {
    res.json({ orders: [] });
  }
};

module.exports = userOrders;
