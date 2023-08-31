
const sql = require("mssql");
const config = require('./db')


const pool = new sql.ConnectionPool(config)
const dbconnection = pool.connect()

module.exports = dbconnection