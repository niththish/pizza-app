const express = require("express");
const signupController = require("../controllers/signup");
const loginController = require("../controllers/login");
const updateUserController = require("../controllers/update_user");
const authVerification = require("../middleware/verifyToken");
const { userCart } = require("../controllers/user_cart");

const router = express.Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.patch("/", authVerification, updateUserController);
router.get("/cart", authVerification, userCart);

module.exports = router;
