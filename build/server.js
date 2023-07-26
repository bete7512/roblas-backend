"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _db = require("./configuration/db");
var _keys = _interopRequireDefault(require("./configuration/keys"));
var _auth = _interopRequireDefault(require("./routes/auth"));
var _routes = _interopRequireDefault(require("./routes/routes"));
// import initModels from './models/init-models'

var app = (0, _express["default"])();

// const models = initModels(sequelize)
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use('/api/auth/', _auth["default"]);
app.use('/api/', _routes["default"]);
// {
//   alter: true,
//   force: true,
// }
_db.sequelize.sync().then(function () {
  app.listen(_keys["default"].server.PORT, function () {
    console.log("Example app listening at http://localhost:".concat(_keys["default"].server.PORT));
  });
});