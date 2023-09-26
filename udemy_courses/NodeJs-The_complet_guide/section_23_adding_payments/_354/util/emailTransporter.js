const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const _env = require('./env_loader.js');

// ---------------------------------------------------------------------

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: _env.SENDGRID_API_KEY
    }
}));

module.exports = transporter;