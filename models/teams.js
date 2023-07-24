var DataTypes = require('sequelize').DataTypes;
var Model = require('sequelize').Model;

function Team(sequelize) {
  var Team = class Team extends Model {};
  Team.init(
    {
      first_name: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      role: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      profile: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
      modelName: 'Team',
      tableName: 'teams',
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

  return Team;
}

module.exports = Team;
