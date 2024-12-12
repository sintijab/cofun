const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: 'sounds'
})

export { pool };