const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "signup"
});

db.connect((err) => {
    if (err) {
        console.log("Connection failed:", err);
        return;
    }

    console.log("MySQL connected");
    
});

module.exports = db;