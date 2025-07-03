const express = require('express');
const router = express.Router();
const { obtenerProductos } = require('../controllers/productsController');

router.get('/', obtenerProductos);

module.exports = router;
