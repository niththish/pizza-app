const pizzaSchema = require("../models/pizza");

//to get all the pizza items
const getPizzas = async (req, res, next) => {
  const pizzas = await pizzaSchema.find({});
  res.json({ pizzas });
};

//to get all pizza items based on pizza category
const getPizzaByCategory = async (req, res, next) => {
  const type = req.params.type;
  const pizzas = await pizzaSchema.find({ type });
  res.json({ pizzas });
};

//to get pizza items that matches a particular search query
const getPizzaBySearch = async (req, res, next) => {
  let { price, type } = req.query;
  price = price || 199;
  type = type || "veg";
  price = parseInt(price);

  const pizzas = await pizzaSchema.find({ price, type });
  res.json({ pizzas });
};

module.exports = { getPizzas, getPizzaByCategory, getPizzaBySearch };
