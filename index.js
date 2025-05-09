const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const correoRoutes = require('./routes/correo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', correoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});