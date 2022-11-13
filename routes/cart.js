const express = require("express");
const authVerification = require("../middleware/verifyToken");
const {
  getCart,
  addToCart,
  deleteFromCart,
  deleteCart,
} = require("../controllers/user_cart");

const router = express.Router();
router.get("/", authVerification, getCart);
router.post("/", authVerification, addToCart);
router.delete("/item", authVerification, deleteFromCart);
router.delete("/", authVerification, deleteCart);

module.exports = router;
