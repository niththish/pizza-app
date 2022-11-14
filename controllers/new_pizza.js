const addPizza = async (req, res, next) => {
  const { name, price, type } = req.body;
  const image = `images/${req.file.filename}`;

  if (!name || !price || !type) return next("all fields are required");

  const pizza = pizzaSchema.create({ name, price, image, type });
  if (pizza) res.json({ status: "added new pizza item successfully" });
  else return next("pizza item not added");
};

module.exports = addPizza;
