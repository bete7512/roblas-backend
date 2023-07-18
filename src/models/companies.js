import { DataTypes, Model,Sequelize } from 'sequelize';

export default function(sequelize) {
  class Company extends Model {}
  Company.init(
    {
      company_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      website: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique:true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true 
      },
      logo: {
        type: DataTypes.STRING(200),
        allowNull: false
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
      modelName: 'Company',
      tableName: 'companies',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: ['company_id']
        }
      ]
    }
  );

  return Company;
};
