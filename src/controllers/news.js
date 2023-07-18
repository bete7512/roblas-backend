import { sequelize } from '../configuration/db'

import { initModels } from '../models/init-models'

const models = initModels(sequelize)

const News = models.news

export const get_all_news = async (req, res) => {
  try {
    const news = await News.findAll()
    return res.status(201).json({
      news,
    })
  } catch (error) {
    return res.status(401).json({
      mesage: error.message,
    })
  }
}

export const get_news_by_id = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id)
    return res.status(201).json({
      news,
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}

export const create_new_news = async (req, res) => {
  try {
    const news = await News.create(req.body)
    return res.status(201).json({
      news:news
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}

export const update_news = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id)
    if (!news) {
      return res
        .status(404)
        .json({ Error: 'News with id ' + req.params.id + ' was not found' })
    }

    await news.update(req.body)
    res.send('News with id ' + req.params.id + ' was updated successfully')
  } catch (err) {
    console.error(err)
    res
      .status(400)
      .json({ Error: 'Could not update news with id ' + req.params.id })
  }
}

export const delete_news = async (req, res) => {
  const id = req.params.id
  try {
    const news = await News.findByPk(id)
    if (!news) {
      return res
        .status(404)
        .json({ Error: 'news with id ' + id + ' was not found' })
    }
    let deleted_news = await News.destroy({
      where: { id: id },
    })

    res.status(204).json({
      status: 'News Deleted Successfully'
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({ Error: 'Could not delete news with id ' + id })
  }
}
