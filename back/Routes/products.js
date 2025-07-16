const express = require('express');
const router = express.Router();
const { obtenerProductos } = require('../Controllers/productsController');


router.get('/', obtenerProductos);

module.exports = router;
