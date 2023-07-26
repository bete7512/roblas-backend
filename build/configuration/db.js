"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = require("sequelize");
var _keys = _interopRequireDefault(require("./keys"));
var sequelize = new _sequelize.Sequelize(_keys["default"].DB_NAME, _keys["default"].DB_USER, _keys["default"].DB_PASSWORD, {
  host: _keys["default"].DB_HOST,
  port: _keys["default"].DB_PORT,
  dialect: 'mysql',
  logging: false
});
exports.sequelize = sequelize;
sequelize.authenticate().then(function () {
  console.log('Database connected');
})["catch"](function (err) {
  console.log(err);
});