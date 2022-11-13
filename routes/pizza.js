const express = require("express");
const {
  getPizzas,
  getPizzaByCategory,
  getPizzaBySearch,
  addPizza,
} = require("../controllers/pizza");

const adminVerification = require("../middleware/verifyAdmin");

const router = express.Router();
router.get("/", getPizzas);
router.get("/:type", getPizzaByCategory);
router.get("/search", getPizzaBySearch);

router.post("/", [adminVerification], addPizza);

module.exports = router;
