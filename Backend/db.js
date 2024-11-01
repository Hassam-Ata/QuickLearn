// backend/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',    // Replace with your DB host
  user: 'root',         // Replace with your DB user
  password: 'goodloop', // Replace with your DB password
  database: 'scd1_db'  // Replace with your DB name
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
