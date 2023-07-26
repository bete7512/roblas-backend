"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_company = exports.get_company_by_id = exports.get_all_companies = exports.delete_company = exports.create_new_company = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../configuration/db");
var _initModels = require("../models/init-models");
var models = (0, _initModels.initModels)(_db.sequelize);
var Company = models.companies;
var get_all_companies = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var companies;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Company.findAll();
        case 3:
          companies = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            companies: companies
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
  return function get_all_companies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.get_all_companies = get_all_companies;
var get_company_by_id = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var company;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Company.findByPk(req.params.id);
        case 3:
          company = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            company: company
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
  return function get_company_by_id(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.get_company_by_id = get_company_by_id;
var create_new_company = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var company;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log('haskdfuoaHODHAI');
          _context3.next = 4;
          return Company.create(req.body);
        case 4:
          company = _context3.sent;
          console.log(company);
          return _context3.abrupt("return", res.status(201).json({
            success: 'Company Added Successfully'
          }));
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(401).json({
            error: "something were wrong here either email or phone should be unique or something else"
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function create_new_company(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.create_new_company = create_new_company;
var update_company = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var company_id, company, updated_company;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          company_id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return Company.findByPk(company_id);
        case 4:
          company = _context4.sent;
          if (company) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            Error: 'Company with id ' + company_id + ' was not found'
          }));
        case 7:
          _context4.next = 9;
          return Company.update(req.body, {
            where: {
              company_id: company_id
            }
          });
        case 9:
          updated_company = _context4.sent;
          console.log(updated_company);
          res.json({
            company: update_company
          });
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](1);
          console.error(_context4.t0);
          res.status(400).json({
            Error: 'Could not update company with id ' + company_id
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 14]]);
  }));
  return function update_company(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.update_company = update_company;
var delete_company = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var company_id, company, deleted_company;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          company_id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return Company.findByPk(company_id);
        case 4:
          company = _context5.sent;
          if (company) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            Error: 'Company with id ' + company_id + ' was not found'
          }));
        case 7:
          _context5.next = 9;
          return Company.destroy({
            where: {
              company_id: company_id
            }
          });
        case 9:
          deleted_company = _context5.sent;
          res.status(204).json({
            company: deleted_company
          });
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          console.error(_context5.t0);
          res.status(400).json({
            Error: 'Could not delete company with id ' + company_id
          });
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 13]]);
  }));
  return function delete_company(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.delete_company = delete_company;