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

const addPizza = async (req, res, next) => {
  const { name, price, type } = req.body;
  const image = `images/${req.file.filename}`;

  if (!name || !price || !type) return next("all fields are required");

  const pizza = pizzaSchema.create({ name, price, image, type });
  if (pizza) res.json({ status: "added new pizza item successfully" });
  else return next("pizza item not added");
};

module.exports = { getPizzas, getPizzaByCategory, getPizzaBySearch, addPizza };
