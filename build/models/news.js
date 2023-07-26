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
  var News = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(News, _Model);
    var _super = _createSuper(News);
    function News() {
      (0, _classCallCheck2["default"])(this, News);
      return _super.apply(this, arguments);
    }
    return (0, _createClass2["default"])(News);
  }(_sequelize.Model);
  News.init({
    id: {
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: _sequelize.DataTypes.STRING(1000),
      allowNull: false
    },
    image: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: true
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
    modelName: 'News',
    tableName: 'news',
    timestamps: false,
    indexes: [{
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id']
    }]
  });
  return News;
}
;