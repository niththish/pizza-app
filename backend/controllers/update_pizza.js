const pizzaSchema = require("../models/pizza");

const updatePizza = async (req, res, next) => {
  const _id = req.params.id;
  if (!_id) return next("pizza id required");

  const { name, price, type } = req.body;
  const patchData = {};

  let image;
  if (req.file) {
    const URL = process.env.BASE_URL;
    image = `${URL}/images/${req.file.filename}`;
  }

  if (image) patchData.image = image;
  if (name) patchData.name = name;
  if (price) patchData.price = price;
  if (type) patchData.type = type;

  await pizzaSchema.updateOne({ _id }, patchData, {
    runValidators: true,
    new: true,
  });

  res.json({ status: "updated pizza item successfully" });
};

module.exports = updatePizza;
