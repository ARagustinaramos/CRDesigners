const { sql, poolPromise } = require('../db');

const getImageById = async (idImagen) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idImagen', sql.Int, idImagen)
      .query('SELECT Imagen FROM dbo.Imagenes WHERE IdImagen = @idImagen');

    if (result.recordset.length === 0 || !result.recordset[0].Imagen) {
      return null;
    }

    return result.recordset[0].Imagen;
  } catch (error) {
    console.error("Error al obtener la imagen desde la base de datos:", error.message);
    throw new Error('Error en la consulta de la imagen');
  }
};

module.exports = { getImageById };
