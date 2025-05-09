const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter;

switch (process.env.EMAIL_PROVIDER) {
  case 'gmail':
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    break;

  case 'outlook':
    transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });
    break;

  default:
    throw new Error('Proveedor de correo no soportado. Usa "gmail" o "outlook" en .env');
}

module.exports = transporter;