const express = require("express");
const authVerification = require("../middleware/verifyToken");
const { userCart } = require("../controllers/user_cart");

const router = express.Router();
router.get("/", authVerification, userCart);

module.exports = router;
