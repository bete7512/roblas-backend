"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _db = require("../configuration/db");
var _initModels = require("../models/init-models");
var _keys = _interopRequireDefault(require("../configuration/keys"));
_dotenv["default"].config();
var auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authHeader, token, decoded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          authHeader = req.headers.authorization;
          if (authHeader) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            error: 'Token not provided'
          }));
        case 3:
          token = authHeader.split(' ')[1];
          if (token) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            error: 'Token not provided'
          }));
        case 6:
          _context.prev = 6;
          decoded = _jsonwebtoken["default"].verify(token, _keys["default"].server.JWT_SECRET);
          req.user = decoded;
          return _context.abrupt("return", next());
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](6);
          return _context.abrupt("return", res.status(401).json({
            error: 'Unauthorized User'
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 12]]);
  }));
  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.auth = auth;