const Pool = require('pg').Pool

const pool = new Pool({
   user: "chriselian",
   password:"",
   host:"localhost",
   port: 5432,
   database: "pernmovie"
})

module.exports = pool
