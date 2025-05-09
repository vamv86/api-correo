const correoService = require('../services/correo.service');

exports.enviarCorreo = async (req, res) => {
  const { para, asunto, mensaje } = req.body;

  if (!para || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  try {
    const resultado = await correoService.enviar(para, asunto, mensaje);
    res.json({ success: true, info: resultado });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error al enviar correo.' });
  }
};