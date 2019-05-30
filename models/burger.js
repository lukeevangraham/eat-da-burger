var orm = require("../config/orm")

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burnerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgerNumber, cb) {
        orm.updateOne(burgerNumber, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;