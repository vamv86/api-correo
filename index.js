/*const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const correoRoutes = require('./routes/correo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', correoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const correoRoutes = require('./routes/correo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Habilitar CORS
app.use(cors({
  origin: '*', // puedes reemplazar '*' por tu frontend (por ejemplo: 'http://localhost:8080')
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// ✅ Middleware para JSON
app.use(bodyParser.json());

// ✅ Rutas
app.use('/api', correoRoutes);

// ✅ Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
