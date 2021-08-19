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
connection.query('SELECT * FROM `segment`', function (err, results, fields) {
    var jsonResult = JSON.stringify(results, null, 2);
    console.log(jsonResult);
});
