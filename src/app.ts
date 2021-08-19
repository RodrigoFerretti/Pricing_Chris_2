import { createConnection } from "mysql2"
import { config as dotenv } from "dotenv"
dotenv();

const connection = createConnection({
    host: process.env.db_host,
    port: parseInt(process.env.port!),
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_schema
})


connection.query(
    'SELECT * FROM `segment`',
    function(err, results, fields) {
        let jsonResult: string = JSON.stringify(results, null, 2);
        console.log(jsonResult); 
    }
  );