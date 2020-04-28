var orm = require ("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res){
            cb(res);
// changed "burgers to burger"
    });
},
    updateOne: function(table, column, id, cb) {
        orm.updateOne("burger", table, column, id, function(res){
            cb(res);

        });
    },
        deleteOne: function(table, id, cb){
            orm.deleteOne('burger', table, id, function(res){
                cb(res);
            });
        }
    };
module.exports = burger;