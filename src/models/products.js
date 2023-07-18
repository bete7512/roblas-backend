import { DataTypes, Model,Sequelize } from 'sequelize';

export default function (sequelize) {
  class Product extends Model {}
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      product_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      company: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('now')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('now')
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: ['product_id']
        },
        {
          name: 'company',
          using: 'BTREE',
          fields: ['company']
        }
      ]
    }
  );

  return Product;
};
