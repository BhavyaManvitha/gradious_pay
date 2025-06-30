// frontend/js/dashboard.js

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    alert("Please login to continue.");
    window.location.href = "login.html";
    return;
  }

  // Display user info
  document.getElementById("userName").textContent = user.name;
  document.getElementById("upiId").textContent = user.upi_id;

  // Fetch transactions and calculate balance
  try {
    const res = await fetch("http://localhost:5000/api/transactions", {
      headers: {
        Authorization: token,
      },
    });

    const transactions = await res.json();

    const balance = transactions.reduce((acc, tx) => {
      return tx.type === "receive"
        ? acc + parseFloat(tx.amount)
        : acc - parseFloat(tx.amount);
    }, 0);

    document.getElementById("balanceDisplay").textContent = `₹${balance.toFixed(2)}`;
  } catch (err) {
    console.error("Error fetching transactions:", err);
    document.getElementById("balanceDisplay").textContent = "₹0.00";
  }
});
