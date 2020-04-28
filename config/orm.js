var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (ob[key]) {
            arr.push(key + "=" + ob[key]);

        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err){ throw err;
        }
            cb(result);
        });

    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = ' INSERT INTO ' + table + ' (' + cols + ') ' + 'VALUES("' + [vals] + '")';
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, col_name, burger_id, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + col_name + '=1' + " WHERE id=" + burger_id;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, burger_id, cb){
        var queryString = 'DELETE FROM ' + table + ' WHERE id = ' + burger_id;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};
module.exports = orm;