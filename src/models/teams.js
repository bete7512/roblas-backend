import { DataTypes, Model,Sequelize } from 'sequelize';

export default function (sequelize) {
  class Team extends Model {}
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
};
