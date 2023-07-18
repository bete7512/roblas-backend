import { sequelize } from '../configuration/db'

import { initModels } from '../models/init-models'

const models = initModels(sequelize)

const Team = models.teams

export const get_all_teams = async (req, res) => {
  try {
    const teams = await Team.findAll()
    return res.status(201).json({
      teams,
    })
  } catch (error) {
    return res.status(401).json({
      mesage: error.message,
    })
  }
}

export const get_team_by_id = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id)
    return res.status(201).json({
      team,
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}

export const create_new_team = async (req, res) => {
  try {
    const team = await Team.create(req.body)
    console.log(team)
    return res.status(201).json({
      success: 'team Added Successfully',
    })
  } catch (error) {
    return res.status(401).json({
      message: error.mesage,
    })
  }
}

export const update_team = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id)
    if (!team) {
      return res
        .status(404)
        .json({ Error: 'Team with id ' + req.params.id + ' was not found' })
    }

    await team.update(req.body)
    res.send('Team with id ' + req.params.id + ' was updated successfully')
  } catch (err) {
    console.error(err)
    res
      .status(400)
      .json({ Error: 'Could not update team with id ' + req.params.id })
  }
}

export const delete_team = async (req, res) => {
  const id = req.params.id
  try {
    const team = await Team.findByPk(id)
    if (!team) {
      return res
        .status(404)
        .json({ Error: 'Team with id ' + id + ' was not found' })
    }

    await Team.destroy({
      where: { id: id },
    })

    res.status(204).json({
      status: 'Team Deleted Successfully',
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({ Error: 'Could not delete team with id ' + id })
  }
}
