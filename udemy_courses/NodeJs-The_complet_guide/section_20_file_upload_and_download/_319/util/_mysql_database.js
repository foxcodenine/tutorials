const mysql = require('mysql2');
const path = require('path');
const dotenv = require('dotenv');

// ---------------------------------------------------------------------

const envAbsolutPath = path.join(__dirname,  '../.env');
dotenv.config({ path: envAbsolutPath });

// ---------------------------------------------------------------------

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});

// ---------------------------------------------------------------------



module.exports = pool.promise();