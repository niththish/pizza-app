const orderSchema = require("../models/orders");
const userSchema = require("../models/user");

//to get all the orders user made, if admin it gives all the orders the application has received
const orders = async (req, res, next) => {
  const _id = req.id;
  const user = await userSchema.findOne({ _id });

  let orders;
  if (user.role === "admin") {
    orders = await orderSchema.find({});
  } else {
    orders = await orderSchema.find({ _id });
  }

  res.json({ orders });
};

module.exports = orders;
