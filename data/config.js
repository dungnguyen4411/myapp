var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
function ConnectDB(){
  connection.connect()
  return connection
}
function SelectQueryInDB(){
  connection.query('SELECT * FROM test', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows)
  })
}
function CloseConnection(){
  connection.end()
}
module.exports.selectUser = function(){
    ConnectDB()
    SelectQueryInDB()
    CloseConnection()
}
