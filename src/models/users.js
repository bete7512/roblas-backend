import { DataTypes, Model,Sequelize } from 'sequelize';

export default function (sequelize) {
  class User extends Model {}
  User.init(
    {
      username: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      role: {
        type: DataTypes.STRING(100),
        allowNull: false
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
      modelName: 'User',
      tableName: 'users',
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

  return User;
};
