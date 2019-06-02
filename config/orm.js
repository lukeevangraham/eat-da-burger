// var db = require('./connection');
var connection = require('./connection');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// CREATE SELECTALL METHOD

// CREATE INSERTONE METHOD

// CREATE UPDATEONE METHOD

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (cols, vals) {
        connection.query(`INSERT INTO burgers (${cols.join(',')}) VALUES (?, ?)`,
            vals,
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    },
    updateOne: function (burgerNumber) {

        connection.query(`UPDATE burgers SET devoured = TRUE WHERE item_id = ?`, [burgerNumber],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    }
};

module.exports = orm;
