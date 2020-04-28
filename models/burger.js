var orm = require ("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(column, name, cb) {
        orm.insertOne("burgers", column, name, function(res){
            cb(res);

    });
},
    updateOne: function(table, column, id, cb) {
        orm.updateOne("burgers", column, id, function(res){
            cb(res);

        });
    },
        deleteOne: function(table, id, cb){
            orm.deleteOne('burgers', id, function(res){
                cb(res);
            });
        }
    };
module.exports = burger;