const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Route to register a new user
router.post('/register', registerUser);

// Route to login user
router.post('/login', loginUser);

module.exports = router;


const protect = require("../middleware/authMiddleware");

router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "This is protected dashboard data", user: req.user });
});
