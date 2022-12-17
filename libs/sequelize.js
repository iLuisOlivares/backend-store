const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

//Proteger con encode la informacion
const USER = encodeURIComponent(config.dbUSer);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});
//Comentamos el pool ya que sequelize realiza el pooling internamente
//const pool = new Pool({ connectionString: URI });



module.exports = sequelize;
