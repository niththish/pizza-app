const express = require("express");
const signupController = require("../controllers/signup");
const loginController = require("../controllers/login");
const updateUserController = require("../controllers/user");

const router = express.Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.patch("/", updateUserController);
module.exports = router;
