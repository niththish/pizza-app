const express = require("express");
const {
  getPizzas,
  getPizzaByCategory,
  getPizzaBySearch,
} = require("../controllers/pizza");

const router = express.Router();
router.get("/", getPizzas);
router.get("/:type", getPizzaByCategory);
router.get("/pizzas/search", getPizzaBySearch);

module.exports = router;
