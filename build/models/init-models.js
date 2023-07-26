"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModels = exports["default"] = initModels;
var _sequelize = require("sequelize");
var _companies = _interopRequireDefault(require("./companies"));
var _news = _interopRequireDefault(require("./news"));
var _products = _interopRequireDefault(require("./products"));
var _teams = _interopRequireDefault(require("./teams"));
var _users = _interopRequireDefault(require("./users"));
function initModels(sequelize) {
  var companies = (0, _companies["default"])(sequelize, _sequelize.DataTypes);
  var news = (0, _news["default"])(sequelize, _sequelize.DataTypes);
  var products = (0, _products["default"])(sequelize, _sequelize.DataTypes);
  var teams = (0, _teams["default"])(sequelize, _sequelize.DataTypes);
  var users = (0, _users["default"])(sequelize, _sequelize.DataTypes);
  return {
    companies: companies,
    news: news,
    products: products,
    teams: teams,
    users: users
  };
}