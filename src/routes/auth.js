import expres from 'express'
import { check, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import initModels from '../models/init-models'
import { sequelize } from '../configuration/db'
import { auth } from '../middleware/authorizer'
import config from '../configuration/keys'
dotenv.config()
const router = expres.Router()

const models = initModels(sequelize)
const User = models.users

router.post('/login', async (req, res) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() })
    }
    console.log(req.body)
    const { username, password } = req.body
    let user = await User.findOne({ where: { username: username } })
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }
    const payload = {
      user: {
        id: user.id,
      },
    }
    const token = jwt.sign(payload, config.server.JWT_SECRET, {
      expiresIn: 360000,
    })
    res.json({ token })
  } catch (err) {
    res.status(500).send('Server Error')
  }
})

export default router