const userSchema = require("../models/user");

const getCart = async (req, res, next) => {
  const _id = req.id;
  const orders = await userSchema.findOne({ _id }, { cart: 1 });
  if (orders) {
    res.json({ orders });
  } else {
    res.json({ orders: [] });
  }
};

const addToCart = async (req, res, next) => {
  const _id = req.id;
  const { productId, quantity, price } = req.body;

  if (!productId || !quantity || !price) {
    return next("invalid cart item");
  }

  await userSchema.updateOne(
    { _id },
    { $push: { cart: { productId, quantity, price } } },
    { new: true, runValidators: true }
  );

  res.json({ status: "added to cart successfully" });
};

module.exports = { getCart, addToCart };
