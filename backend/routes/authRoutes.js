const express = require("express");
const { signup, login, getDashboard } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Protected route (requires authentication)
router.get('/profile', authMiddleware, getDashboard);

module.exports = router;