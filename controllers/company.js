const sequelize = require('../configuration/db').sequelize;
const initModels = require('../models/init-models');

const models = initModels(sequelize);

const Company = models.companies;

exports.get_all_companies = async function (req, res) {
  try {
    const companies = await Company.findAll();
    return res.status(201).json({
      companies: companies,
    });
  } catch (error) {
    return res.status(401).json({
      mesage: error.message,
    });
  }
};

exports.get_company_by_id = async function (req, res) {
  try {
    const company = await Company.findByPk(req.params.id);
    return res.status(201).json({
      company: company,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

exports.create_new_company = async function (req, res) {
  try {
    console.log('haskdfuoaHODHAI');
    const company = await Company.create(req.body);
    console.log(company);
    return res.status(201).json({
      success: 'Company Added Successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "something were wrong here either email or phone should be unique or something else",
    });
  }
};

exports.update_company = async function (req, res) {
  const company_id = req.params.id;
  try {
    const company = await Company.findByPk(company_id);
    if (!company) {
      return res
        .status(404)
        .json({ Error: 'Company with id ' + company_id + ' was not found' });
    }

    let updated_company = await Company.update(req.body, {
      where: { company_id: company_id },
    });
    console.log(updated_company);
    res.json({
      company: updated_company,
    });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ Error: 'Could not update company with id ' + company_id });
  }
};

exports.delete_company = async function (req, res) {
  const company_id = req.params.id;
  try {
    const company = await Company.findByPk(company_id);
    if (!company) {
      return res
        .status(404)
        .json({ Error: 'Company with id ' + company_id + ' was not found' });
    }
    let deleted_company = await Company.destroy({
      where: { company_id: company_id },
    });

    res.status(204).json({
      company: deleted_company,
    });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ Error: 'Could not delete company with id ' + company_id });
  }
};
