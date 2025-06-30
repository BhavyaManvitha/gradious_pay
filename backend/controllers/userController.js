// backend/controllers/userController.js

const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register User
const registerUser = async (req, res) => {
  const { name, email, password, upi_id, bank_name, account_number } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO users (name, email, password, upi_id, bank_name, account_number)
                 VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [name, email, hashedPassword, upi_id, bank_name, account_number], (err, result) => {
      if (err) {
        console.log("❌ MySQL Insert Error:", err.message); // ✅ this is what you wanted
        return res.status(500).json({ message: "User registration failed", error: err.message });
      }

      console.log("✅ User inserted with ID:", result.insertId); // optional success log
      res.status(201).json({ message: "User registered successfully" });
    });

  } catch (err) {
    console.log("❌ Server Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



// Login User
const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: "Invalid email or user not found" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        upi_id: user.upi_id,
        bank_name: user.bank_name
      }
    });
  });
};

module.exports = { registerUser, loginUser };
