const pizzaSchema = require("../models/pizza");
const fs = require("fs/promises");

//deletes a particular pizza item for the database using productId
const deletePizza = async (req, res, next) => {
  const _id = req.params.id;
  const pizza = await pizzaSchema.findOne({ _id });
  if (!pizza) return next("pizza item not found");
  let image = pizza.image;

  if (image) image = image.replace("localhost:5000/", "public/");

  try {
    await fs.rm(image);
  } catch (err) {
    console.log("image not found");
  }

  await pizzaSchema.deleteOne({ _id });

  res.json({ status: "deleted pizza item successfully" });
};

module.exports = deletePizza;
