"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_news = exports.get_news_by_id = exports.get_all_news = exports.delete_news = exports.create_new_news = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../configuration/db");
var _initModels = require("../models/init-models");
var models = (0, _initModels.initModels)(_db.sequelize);
var News = models.news;
var get_all_news = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var news;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return News.findAll();
        case 3:
          news = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            news: news
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(401).json({
            mesage: _context.t0.message
          }));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function get_all_news(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.get_all_news = get_all_news;
var get_news_by_id = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var news;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return News.findByPk(req.params.id);
        case 3:
          news = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            news: news
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(401).json({
            message: _context2.t0.mesage
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function get_news_by_id(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.get_news_by_id = get_news_by_id;
var create_new_news = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var news;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return News.create(req.body);
        case 3:
          news = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            news: news
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(401).json({
            message: _context3.t0.mesage
          }));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function create_new_news(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.create_new_news = create_new_news;
var update_news = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var news;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return News.findByPk(req.params.id);
        case 3:
          news = _context4.sent;
          if (news) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            Error: 'News with id ' + req.params.id + ' was not found'
          }));
        case 6:
          _context4.next = 8;
          return news.update(req.body);
        case 8:
          res.send('News with id ' + req.params.id + ' was updated successfully');
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(400).json({
            Error: 'Could not update news with id ' + req.params.id
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function update_news(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.update_news = update_news;
var delete_news = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, news, deleted_news;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return News.findByPk(id);
        case 4:
          news = _context5.sent;
          if (news) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            Error: 'news with id ' + id + ' was not found'
          }));
        case 7:
          _context5.next = 9;
          return News.destroy({
            where: {
              id: id
            }
          });
        case 9:
          deleted_news = _context5.sent;
          res.status(204).json({
            status: 'News Deleted Successfully'
          });
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          res.status(400).json({
            Error: 'Could not delete news with id ' + id
          });
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return function delete_news(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.delete_news = delete_news;