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
  var Team = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Team, _Model);
    var _super = _createSuper(Team);
    function Team() {
      (0, _classCallCheck2["default"])(this, Team);
      return _super.apply(this, arguments);
    }
    return (0, _createClass2["default"])(Team);
  }(_sequelize.Model);
  Team.init({
    first_name: {
      type: _sequelize.DataTypes.STRING(75),
      allowNull: false
    },
    last_name: {
      type: _sequelize.DataTypes.STRING(75),
      allowNull: false
    },
    role: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    profile: {
      type: _sequelize.DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: _sequelize.DataTypes.STRING(12),
      allowNull: false
    },
    email: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: true
    },
    id: {
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
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
    modelName: 'Team',
    tableName: 'teams',
    timestamps: false,
    indexes: [{
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id']
    }]
  });
  return Team;
}
;