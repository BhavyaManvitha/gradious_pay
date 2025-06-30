document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

function switchBalanceVisibility() {
    const balanceElement = document.getElementById("balanceDisplay");
    const icon = document.getElementById("visibilityIcon");

    const actualBalance = "₹7,850.00";  
    const hiddenBalance = "₹****.**";

    const isHidden = balanceElement.textContent.includes("•");

    if (isHidden) {
      balanceElement.textContent = actualBalance;
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      balanceElement.textContent = hiddenBalance;
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
}

 function goToSendPage() {
    window.location.href = "sendMoney.html";
  }
  function goToReceivePage() {
    window.location.href = "receive.html";
  }
  function show_qr() {
    window.location.href = "receive.html";
  }


const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', () => {
  const confirmLogout = confirm('Do you really want to log out?');
  if (confirmLogout) {
    location.reload();
  }
});


function copyUPI() {
      const upiText = document.getElementById("upiId").textContent;
      navigator.clipboard.writeText(upiText).then(() => {
        alert("UPI ID copied to clipboard!");
      });
    }
