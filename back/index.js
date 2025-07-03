require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productosRoutes = require('./routes/productos');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', productosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en el puerto ${PORT}`);
});
