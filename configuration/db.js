const Sequelize = require('sequelize');
const config = require('./keys');
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log('Database connected');
  })
  .catch(function (err) {
    console.log(err);
  });

exports.sequelize = sequelize;
