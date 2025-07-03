require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER.split('\\')[0],
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    instanceName: process.env.DB_SERVER.split('\\')[1],
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('📡 Conexión a SQL Server establecida');
    return pool;
  })
  .catch(err => {
    console.error('❌ Error al conectar con SQL Server:', err);
  });

module.exports = {
  sql, poolPromise,
};
