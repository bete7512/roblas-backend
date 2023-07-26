var DataTypes = require('sequelize').DataTypes
var initCompaniesModel = require('./companies')
var initNewsModel = require('./news')
var initProductsModel = require('./products')
var initTeamsModel = require('./teams')
var initUsersModel = require('./users')

function initModels(sequelize) {
  var companies = initCompaniesModel(sequelize, DataTypes)
  var news = initNewsModel(sequelize, DataTypes)
  var products = initProductsModel(sequelize, DataTypes)
  var teams = initTeamsModel(sequelize, DataTypes)
  var users = initUsersModel(sequelize, DataTypes)

  return {
    companies: companies,
    news: news,
    products: products,
    teams: teams,
    users: users,
  }
}

module.exports = initModels
