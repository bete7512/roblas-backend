// var dotenv = require('dotenv');
// dotenv.config();
const process = {
  env: {
    JWT_SECRET: "9e1LrqyH4tI0RiUW45wYAQpyWaJ75uCefvq0XqwHtC8",
    PORT: "3000",
    DB_PORT: "3306",
    DB_HOST: "109.70.148.67",
    DB_PASSWORD: "G3rW8eT2wD0zK6i",
    DB_NAME: "roblassupplychai_roblas_db",
    DB_USER: "roblassupplychai_roblassupplychai",
  },
};
var config = {
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  server: {
    PORT: 3000,
    JWT_SECRET: process.env.JWT_SECRET
  }
};

module.exports = config;
