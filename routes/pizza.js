const express = require("express");
const {
  getPizzas,
  getPizzaByCategory,
  getPizzaBySearch,
} = require("../controllers/pizza");
const addPizza = require("../controllers/new_pizza");
const adminVerification = require("../middleware/verifyAdmin");
const uploadFile = require("../middleware/uploadFile");

const router = express.Router();
router.get("/", getPizzas);
router.get("/:type", getPizzaByCategory);
router.get("/search", getPizzaBySearch);

router.post("/", [adminVerification, uploadFile], addPizza);

module.exports = router;
