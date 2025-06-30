const db = require("../db");

const createTransaction = (req, res) => {
  const { amount, type } = req.body;
  const user_id = req.user.id;

  const sql = `INSERT INTO transactions (user_id, amount, type) VALUES (?, ?, ?)`;
  db.query(sql, [user_id, amount, type], (err, result) => {
    if (err) {
      console.error("❌ Insert Transaction Error:", err.message);
      return res.status(500).json({ message: "Failed to create transaction" });
    }
    res.status(201).json({ message: "Transaction successful" });
  });
};

const getTransactions = (req, res) => {
  const user_id = req.user.id;

  const sql = `SELECT * FROM transactions WHERE user_id = ? ORDER BY timestamp DESC`;
  db.query(sql, [user_id], (err, results) => {
    if (err) {
      console.error("❌ Fetch Transactions Error:", err.message);
      return res.status(500).json({ message: "Failed to fetch transactions" });
    }
    res.json(results);
  });
};

module.exports = { createTransaction, getTransactions };
