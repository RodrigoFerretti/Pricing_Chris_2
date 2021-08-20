"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = require("mysql2");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var connection = mysql2_1.createConnection({
    host: process.env.db_host,
    port: parseInt(process.env.port),
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_schema
});
var DbModel = /** @class */ (function () {
    function DbModel() {
        this.tableName = "segment";
    }
    DbModel.prototype.query = function () {
        this.sqlStatement = "SELECT * FROM " + this.tableName;
        return this;
    };
    DbModel.prototype.filter = function (modelObject) {
        this.sqlStatement += " WHERE ";
        for (var _i = 0, _a = Object.entries(modelObject); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            this.sqlStatement += " " + this.tableName + "." + key + " == '" + value + "'";
        }
        return this;
    };
    DbModel.prototype.orderBy = function (modelColumn, direction) {
        this.sqlStatement += " ORDER BY " + this.tableName + "." + modelColumn + " " + direction;
    };
    DbModel.prototype.all = function () {
        connection.query(this.sqlStatement, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    };
    return DbModel;
}());
var segment = new DbModel;
segment.query().all();
