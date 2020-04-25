var mysql = require("mysql2");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});
}
connection.connect(function(err) {
    if (err) {
        console.error("error connceting: " + err.stack);
        return;
    }
console.log("connected as id " + connection.threadId);
});
module.exports = connection;