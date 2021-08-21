import { createConnection } from "mysql2/promise"
import { config as dotenv } from "dotenv"


const main = async () => {

    dotenv();

    const connection = await createConnection({
        host: process.env.db_host,
        port: parseInt(process.env.port!),
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_schema
    })

    class DbModel {
        private sqlStatement!: string;
        public tableName!: string;
        public columns!: object;

        public query() {
            this.sqlStatement = `SELECT * FROM ${this.tableName}`;
            return this;
        }

        public filter(modelObject: Partial<this[`columns`]>) {
            this.sqlStatement += ` WHERE `;
            for (let [key, value] of Object.entries(modelObject)) {
                this.sqlStatement += ` ${this.tableName}.${key} = '${value}'`
            }
            return this;
        }

        public orderBy(modelColumn: string, direction: `ASC`|`DESC`) {
            this.sqlStatement += ` ORDER BY ${this.tableName}.${modelColumn} ${direction}`
        }

        public async all() {
            const [rows, fields] = await connection.query(this.sqlStatement);
            return rows;
        }
    }


    class SegmentModel extends DbModel {
        tableName = `segment`;

        columns!: {
            id: number;
            name: string;
        }

    }

    let segment: SegmentModel = new SegmentModel;
    const response = await segment.query().filter({id: 1}).all()
    console.log(response);

}

main();


let example: {
    id: number,
    name: string
}

let randomVariable: `id` | `name`;
