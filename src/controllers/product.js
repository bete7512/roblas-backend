import { sequelize } from '../configuration/db'

import { initModels } from '../models/init-models'

const models = initModels(sequelize)

const Product = models.products

export const get_all_products = async (req, res) => {
  try {
    const products = await Product.findAll()
    return res.status(201).json({
      products,
    })
  } catch (error) {

    return res.status(401).json({
      mesage: error.message,
    })
  }
}

export const get_product_by_id = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)
    return res.status(201).json({
      product,
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}

export const create_new_product = async (req,res) => {
  try {
    const product = await Product.create(req.body)
    console.log(product)
    return res.status(201).json({
      success: 'product Added Successfully',
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}
export const update_product = async (req, res) => {
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


export const delete_product = async (req, res) => {
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
