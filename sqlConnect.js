var mysql = require('mysql')

var db = {
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'text'
}

var connection = mysql.createConnection(db)
connection.connect()

module.exports = {
    connection
}