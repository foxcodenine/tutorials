const path = require('path');
const dotenv = require('dotenv');

const envAbsolutPath = path.join(__dirname,  '../.env');
dotenv.config({ path: envAbsolutPath });

module.exports = process.env;