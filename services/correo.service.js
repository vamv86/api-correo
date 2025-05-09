const transporter = require('../config/nodemailer.config');

exports.enviar = async (para, asunto, mensaje) => {
  const mailOptions = {
    from: `"Formularios 911" <${process.env.EMAIL_USER}>`,
    to: para,
    subject: asunto,
    text: mensaje
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};