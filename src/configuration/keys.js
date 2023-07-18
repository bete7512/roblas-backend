import dotenv from 'dotenv'
dotenv.config()

const config = {
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  server: {
    PORT:3000,
    JWT_SECRET:process.env.JWT_SECRET
  },
}

export default config
