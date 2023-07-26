"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _sequelize = require("sequelize");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _default(sequelize) {
  var Company = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Company, _Model);
    var _super = _createSuper(Company);
    function Company() {
      (0, _classCallCheck2["default"])(this, Company);
      return _super.apply(this, arguments);
    }
    return (0, _createClass2["default"])(Company);
  }(_sequelize.Model);
  Company.init({
    company_id: {
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    website: {
      type: _sequelize.DataTypes.STRING(200),
      allowNull: true
    },
    phone: {
      type: _sequelize.DataTypes.STRING(14),
      allowNull: false,
      unique: true
    },
    email: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    logo: {
      type: _sequelize.DataTypes.STRING(200),
      allowNull: false
    },
    created_at: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: _sequelize.Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: _sequelize.Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize: sequelize,
    modelName: 'Company',
    tableName: 'companies',
    timestamps: false,
    indexes: [{
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['company_id']
    }]
  });
  return Company;
}
;