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
  var Product = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Product, _Model);
    var _super = _createSuper(Product);
    function Product() {
      (0, _classCallCheck2["default"])(this, Product);
      return _super.apply(this, arguments);
    }
    return (0, _createClass2["default"])(Product);
  }(_sequelize.Model);
  Product.init({
    product_id: {
      type: _sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: _sequelize.DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: _sequelize.DataTypes.STRING(300),
      allowNull: false
    },
    company: {
      type: _sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: _sequelize.DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    image: {
      type: _sequelize.DataTypes.STRING(200),
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
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
    indexes: [{
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['product_id']
    }, {
      name: 'company',
      using: 'BTREE',
      fields: ['company']
    }]
  });
  return Product;
}
;