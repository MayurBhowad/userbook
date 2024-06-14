const mysql = require("mysql2");
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

const dbConn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log('Database connected');
})

module.exports = dbConn