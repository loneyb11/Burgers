var mysql = require("mysql2");

var conncetion;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection({
    port: 3360,
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