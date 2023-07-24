const sequelize = require('../configuration/db').sequelize;
const initModels = require('../models/init-models');

const models = initModels(sequelize);

const Product = models.products;

exports.get_all_products = async function (req, res) {
  try {
    const products = await Product.findAll();
    return res.status(201).json({
      products: products,
    });
  } catch (error) {
    return res.status(401).json({
      mesage: error.message,
    });
  }
};

exports.get_product_by_id = async function (req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    return res.status(201).json({
      product: product,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

exports.create_new_product = async function (req, res) {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    return res.status(201).json({
      success: 'product Added Successfully',
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

exports.update_product = async function (req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ Error: 'Product with id ' + req.params.id + ' was not found' });
    }

    await product.update(req.body);
    res.send('Product with id ' + req.params.id + ' was updated successfully');
  } catch (err) {
    console.error(err);
    res.status(400).json({ Error: 'Could not update product with id ' + req.params.id });
  }
};

exports.delete_product = async function (req, res) {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ Error: 'Product with id ' + id + ' was not found' });
    }

    await Product.destroy({
      where: { product_id: id },
    });

    res.status(204).json({
      status: 'Product Deleted Successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ Error: 'Could not delete product with id ' + id });
  }
};
