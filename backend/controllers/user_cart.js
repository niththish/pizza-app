const userSchema = require("../models/user");

//to get a users cart items
const getCart = async (req, res, next) => {
  const _id = req.id;
  const orders = await userSchema.findOne({ _id }, { cart: 1 });
  if (orders) {
    res.json({ orders });
  } else {
    res.json({ orders: [] });
  }
};

//to add a item into a users cart
const addToCart = async (req, res, next) => {
  const _id = req.id;
  const { productId, quantity, price, name } = req.body;

  if (!productId || !quantity || !price || !name) {
    return next("invalid cart item");
  }

  await userSchema.updateOne(
    { _id },
    { $push: { cart: { productId, quantity, price, name } } },
    { new: true, runValidators: true }
  );

  res.json({ status: "added to cart successfully" });
};

//to delete a item from a user cart
const deleteFromCart = async (req, res, next) => {
  const _id = req.id;
  const { productId, quantity, price, name } = req.body;

  if (!productId || !quantity || !price || !name) {
    return next("invalid cart item");
  }

  await userSchema.updateOne(
    { _id },
    { $pull: { cart: { productId, quantity, price } } }
  );

  res.json({ status: "removed item from cart successfully" });
};

//to empty the user cart
const deleteCart = async (req, res, next) => {
  const _id = req.id;
  await userSchema.updateOne(
    { _id },
    { $set: { cart: [] } },
    { new: true, runValidators: true }
  );

  res.json({ status: "user cart deleted successfully" });
};

module.exports = { getCart, addToCart, deleteFromCart, deleteCart };
