const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'noor',
  database: 'user_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

app.post('/register', async (req, res) => {
  const { firstName, lastName, mobileNumber, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (first_name, last_name, mobile_number, email, password)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [firstName, lastName, mobileNumber, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('MySQL Error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      res.status(200).json({ message: 'User registered successfully!' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Error hashing password' });
  }
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Query to check user in the database (you should add your own logic here)
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      if (result.length > 0) {
        // User found, login successful
        return res.status(200).json({ message: "Login successful" });
      } else {
        // User not found or incorrect password
        return res.status(401).json({ error: "Invalid credentials" });
      }
    });
  });

  // === Admin Login ===
 app.post("/admin-login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const query = "SELECT * FROM admins WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Admin login successful" });
  });
});

  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // is there any issue
});
