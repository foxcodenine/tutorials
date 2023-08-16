const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

const envAbsolutPath = path.join(__dirname,  '../.env');
dotenv.config({ path: envAbsolutPath });
// ---------------------------------------------------------------------

const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASSWORD,
        {
            dialect: 'mysql',
            host: process.env.DATABASE_HOST,

            // -- disable logging; default: console.log
            logging: false,
        }
    )

module.exports = sequelize;