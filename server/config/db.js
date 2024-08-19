const mysql = require('mysql2/promise');
require('dotenv').config();

//DB connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 10
});

pool.getConnection()
    .then(() => console.log('Database connection successful'))
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

pool.on('connection', (connection) => {
    console.log("Database connection established");
});

pool.on('error', (err) => {
    console.error("Database error:", err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
    }
});

module.exports = pool;