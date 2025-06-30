# Gradious Pay

Gradious Pay is a clean, desktop-responsive web application inspired by Google Pay. It allows users to perform basic digital payment functions such as sending and receiving money, managing bank accounts, and tracking transactions, all within a smooth and easy-to-use interface.

## Features

- Login using email and password (demo account provided)
- Dashboard displaying wallet balance and quick actions
- Send and receive money using UPI ID or QR code
- View transaction history
- Manage saved bank accounts
- Settings page with dark mode toggle
- Designed for desktop web view

## Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Database: MySQL

## Pages Overview

| Page              | File Name          |
|-------------------|--------------------|
| Dashboard         | `index.html`       |
| Send Money        | `sendMoney.html`   |
| Receive Money     | `receive.html`     |
| Transactions      | `transactions.html`|
| Bank Accounts     | `bank.html`        |
| Settings          | `settings.html`    |
| Login             | `login.html`       |

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gradious_pay.git
cd gradious_pay
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following contents:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=gradious_pay
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npx nodemon server.js
```

### 3. Frontend Setup

Use Live Server or any static server to launch `frontend/index.html` in the browser.

## Demo Login

To try out the app:

```
Email: bhavya@example.com
Password: secure123
```

## Live Preview

Visit: [https://gpaybybhavya.netlify.app](https://gpaybybhavya.netlify.app)

## Author

This project was developed by Bhavya Manvitha as part of a hackathon. It was built from scratch using full stack technologies to demonstrate a real-world UPI-like application interface.

> Note: This project is for demonstration purposes only. Sensitive operations like authentication and money transfer logic are simplified.