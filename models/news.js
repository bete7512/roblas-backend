var DataTypes = require('sequelize').DataTypes;
var Model = require('sequelize').Model;

function News(sequelize) {
  var News = class News extends Model {};
  News.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('now')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('now')
      },
    },
    {
      sequelize: sequelize,
      modelName: 'News',
      tableName: 'news',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: ['id']
        }
      ]
    }
  );

  return News;
}

module.exports = News;
