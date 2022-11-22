const express = require("express");
const signupController = require("../controllers/signup");
const loginController = require("../controllers/login");
const userRoleController = require("../controllers/role");
const updateUserController = require("../controllers/update_user");
const authVerification = require("../middleware/verifyToken");

const router = express.Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.patch("/", authVerification, updateUserController);

router.get("/role", authVerification, userRoleController);

module.exports = router;
