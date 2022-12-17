// Recuerda instalar dotenv para leer las variables de entorno desde arhivos .env
require('dotenv').config(); // npm i dotenv


const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUSer: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
}


module.exports = { config }
