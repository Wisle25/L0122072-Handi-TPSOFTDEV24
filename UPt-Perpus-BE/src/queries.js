const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'perpus',
  password: 'superuser',
  port: 5432,
})

module.exports = { pool }