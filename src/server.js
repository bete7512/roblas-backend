import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import initModels from './models/init-models'
import { sequelize } from './configuration/db'
import config from './configuration/keys'
import auth_route from './routes/auth'
import recource_route from './routes/routes'
const app = express()

const models = initModels(sequelize)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/api/auth/', auth_route)
app.use('/api/', recource_route)
// {
//   alter: true,
//   force: true,
// }
sequelize
  .sync()
  .then(() => {
    app.listen(config.server.PORT, () => {
      console.log(
        `Example app listening at http://localhost:${config.server.PORT}`,
      )
    })
  })
