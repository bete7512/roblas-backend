import { DataTypes } from 'sequelize';
import initCompaniesModel from './companies';
import initNewsModel from './news';
import initProductsModel from './products';
import initTeamsModel from './teams';
import initUsersModel from './users';

function initModels(sequelize) {
  const companies = initCompaniesModel(sequelize, DataTypes);
  const news = initNewsModel(sequelize, DataTypes);
  const products = initProductsModel(sequelize, DataTypes);
  const teams = initTeamsModel(sequelize, DataTypes);
  const users = initUsersModel(sequelize, DataTypes);

  return {
    companies,
    news,
    products,
    teams,
    users,
  };
}

export { initModels as default, initModels };
