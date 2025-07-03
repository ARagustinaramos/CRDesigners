const { poolPromise } = require('../db');

const obtenerProducts = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Productos'); // Cambiá si tu tabla se llama distinto
    res.json(result.recordset);
  } catch (err) {
    console.error('❌ Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al consultar productos' });
  }
};

module.exports = { obtenerProducts };
