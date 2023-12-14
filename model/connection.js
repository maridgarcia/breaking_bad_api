require('dotenv').config();
const mysql = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

const connection = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
});

module.exports = connection;
