
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Read users from users.json
const getUsers = () => {
  const data = fs.readFileSync('backend/users.json');
  return JSON.parse(data);
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// function login() {
//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();
  
//     // Replace these with real values or database checks later
//     const correctUsername = "admin";
//     const correctPassword = "1234";
  
//     if (username === correctUsername && password === correctPassword) {
//       alert("Login successful! Welcome " + username);
//       // You can redirect to home page or dashboard
//       window.location.href = "home.html"; // Create home.html
//     } else {
//       alert("Incorrect username or password!");
//     }
//   }

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('login-form');
//   const signBtn = document.getElementById('sign-btn');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent actual form submission

//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();

//     if (username === '' || password === '') {
//       alert('Please enter both username and password.');
//     } else {
//       // You can replace this with actual login logic
//       alert('Login successful (demo).');
//     }
//   });

//   // Optional: Change cursor on hover
//   signBtn.style.cursor = 'pointer';
// });

  