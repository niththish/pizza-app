const express = require("express");
const ordersController = require("../controllers/orders");
const addToOrders = require("../controllers/new_order");

const router = express.Router();

router.get("/", ordersController);
router.post("/", addToOrders);
module.exports = router;
