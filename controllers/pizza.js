const pizzaSchema = require("../models/pizza");

const getPizzas = async (req, res, next) => {
  const pizzas = await pizzaSchema.find({});
  res.json({ pizzas });
};

const getPizzaByCategory = async (req, res, next) => {
  const type = req.params.type;
  const pizzas = await pizzaSchema.find({ type });
  res.json({ pizzas });
};

const getPizzaBySearch = async (req, res, next) => {
  let { price, type } = req.query;
  price = price || 199;
  type = type || "veg";
  price = parseInt(price);

  const pizzas = await pizzaSchema.find({ price, type });
  res.json({ pizzas });
};

module.exports = { getPizzas, getPizzaByCategory, getPizzaBySearch };
