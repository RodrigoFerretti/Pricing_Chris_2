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

class DbModel {
    public sqlStatement!: string;
    private tableName: string = `segment`;

    public query() {
        this.sqlStatement = `SELECT * FROM ${this.tableName}`;
        return this;
    }

    public filter(modelObject: object) {
        this.sqlStatement += ` WHERE `;
        for (let [key, value] of Object.entries(modelObject)) {
            this.sqlStatement += ` ${this.tableName}.${key} == '${value}'`
        }
        return this;
    }

    public orderBy(modelColumn: string, direction: `ASC`|`DESC`) {
        this.sqlStatement += ` ORDER BY ${this.tableName}.${modelColumn} ${direction}`
    }

    public all() {
        connection.query(this.sqlStatement, function(err, result) {
            if (err) {
                throw err
            }
            console.log(result);
        })
    }
}


let segment: DbModel = new DbModel;
segment.query().all();