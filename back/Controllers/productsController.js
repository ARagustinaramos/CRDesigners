const { poolPromise } = require('../db');

const obtenerProductos = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT TOP 10 * FROM dbo.Articulos');

    console.log('🔎 Resultados:', result.recordset); // ⬅️ Acá

    res.json(result.recordset);
  } catch (err) {
    console.error('❌ Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al consultar productos' });
  }
};


module.exports = { obtenerProductos };

