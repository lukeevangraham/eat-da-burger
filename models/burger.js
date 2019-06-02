var orm = require("../config/orm")

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerCols, burgerVals, cb) {
        orm.insertOne(burgerCols, burgerVals, function(res) {
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