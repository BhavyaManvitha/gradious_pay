// frontend/js/login.js
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Store token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Something went wrong.");
  }
});
function autoFillDemo() {
  document.getElementById("email").value = "bhavya@example.com";
  document.getElementById("password").value = "secure123";
}