const express = require('express');
const router = express.Router();
const correoController = require('../controllers/correo.controller');

router.post('/enviar-correo', correoController.enviarCorreo);

module.exports = router;