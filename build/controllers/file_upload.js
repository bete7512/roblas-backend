"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file_upload = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = _interopRequireDefault(require("../configuration/cloudinary"));
var file_upload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body$input, name, type, base64str, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$input = req.body.input, name = _req$body$input.name, type = _req$body$input.type, base64str = _req$body$input.base64str;
          _context.next = 4;
          return _cloudinary["default"].uploader.upload("data:image/jepg;base64,".concat(base64str));
        case 4:
          result = _context.sent;
          return _context.abrupt("return", res.json({
            image_url: result.url
          }));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(400).json({
            message: _context.t0
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function file_upload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.file_upload = file_upload;