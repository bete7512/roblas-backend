import { Sequelize } from 'sequelize'
import config from './keys'
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'mysql',
    logging: false,
  },
)
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log(err)
  })

export { sequelize }
