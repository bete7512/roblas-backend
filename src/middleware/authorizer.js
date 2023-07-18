import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { sequelize } from '../configuration/db'
import { initModels } from '../models/init-models'
import config from '../configuration/keys'
dotenv.config()
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  try {
    const decoded = jwt.verify(token, config.server.JWT_SECRET)
    req.user = decoded;
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized User' })
  }
}

export { auth }
