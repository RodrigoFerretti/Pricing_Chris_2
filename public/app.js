"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
require("dotenv").config();
var sequelize = new sequelize_1.Sequelize("mysql://" + process.env.db_user + ":" + process.env.db_password + "@" + process.env.db_host + ":" + process.env.db_port + "/" + process.env.db_schema);
sequelize.authenticate().then(function () {
    console.log("Database connection OK!");
}).catch(function (error) {
    console.log("Database connection ERROR! " + error);
});
