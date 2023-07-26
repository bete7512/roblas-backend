"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _expressValidator = require("express-validator");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _initModels = _interopRequireDefault(require("../models/init-models"));
var _db = require("../configuration/db");
var _authorizer = require("../middleware/authorizer");
var _keys = _interopRequireDefault(require("../configuration/keys"));
_dotenv["default"].config();
var router = _express["default"].Router();
var models = (0, _initModels["default"])(_db.sequelize);
var User = models.users;
router.post('/login', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var error, _req$body, username, password, user, isMatch, payload, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          error = (0, _expressValidator.validationResult)(req);
          if (error.isEmpty()) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            errors: error.array()
          }));
        case 4:
          console.log(req.body);
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.next = 8;
          return User.findOne({
            where: {
              username: username
            }
          });
        case 8:
          user = _context.sent;
          if (user) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            errors: [{
              msg: 'Invalid Credentials'
            }]
          }));
        case 11:
          _context.next = 13;
          return _bcryptjs["default"].compare(password, user.password);
        case 13:
          isMatch = _context.sent;
          if (isMatch) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            errors: [{
              msg: 'Invalid Credentials'
            }]
          }));
        case 16:
          payload = {
            user: {
              id: user.id
            }
          };
          token = _jsonwebtoken["default"].sign(payload, _keys["default"].server.JWT_SECRET, {
            expiresIn: 360000
          });
          res.json({
            token: token
          });
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          res.status(500).send('Server Error');
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;