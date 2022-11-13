const express = require("express");
const authVerification = require("../middleware/verifyToken");
const { getCart } = require("../controllers/user_cart");

const router = express.Router();
router.get("/", authVerification, getCart);

module.exports = router;
