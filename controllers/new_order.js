const orderSchema = require("../models/orders");
const userSchema = require("../models/user");
const pizzaSchema = require("../models/pizza");

const addToOrders = async (req, res, next) => {
  const _id = req.id;

  let orders = await userSchema.findOne({ _id }, { cart: 1 });
  orders = orders.cart;

  if (!orders || orders.length === 0)
    res.json({ status: "cart is empty to make orders" });

  const newOrders = await getOrders(orders);

  await orderSchema.create({ customerId: _id, items: newOrders });

  res.json({ status: "order successful" });
};

async function getOrders(orders) {
  const newOrders = await Promise.all(orders.map(mapping));
  return newOrders.filter((orders) => orders !== undefined);
}

async function mapping(order) {
  const pizza = await pizzaSchema.findOne({ _id: order.productId });
  if (pizza)
    return {
      name: pizza.name,
      price: pizza.price * order.quantity,
      quantity: order.quantity,
    };
}

module.exports = addToOrders;
