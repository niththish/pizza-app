const pizzaSchema = require("../models/pizza");

const addPizza = async (req, res, next) => {
  if (!req.file) return next("image file required");

  const { name, price, type } = req.body;
  if (!name || !price || !type) return next("all fields are required");

  const URL = process.env.BASE_URL;
  const image = `${URL}/images/${type}/${req.file.filename}`;

  const pizza = pizzaSchema.create({ name, price, image, type });
  if (pizza) res.json({ status: "added new pizza item successfully" });
  else return next("pizza item not added");
};

module.exports = addPizza;
