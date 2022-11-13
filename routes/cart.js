const express = require("express");
const authVerification = require("../middleware/verifyToken");
const { getCart, addToCart } = require("../controllers/user_cart");

const router = express.Router();
router.get("/", authVerification, getCart);
router.post("/", authVerification, addToCart);

module.exports = router;
