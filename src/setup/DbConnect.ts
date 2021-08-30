import { createConnection, Connection } from "mysql2/promise"
import { config as dotenv } from "dotenv"


dotenv();

export class Database {
    host: string | undefined;
    port: number | undefined;
    user: string | undefined;
    password: string | undefined;
    schema: string | undefined; 

    constructor() {
        this.host = process.env.db_host;
        this.port = parseInt(process.env.port!);
        this.user = process.env.db_user;
        this.password = process.env.db_password;
        this.schema = process.env.db_schema;
    };

    public async connection() {
        const databaseConnection: Connection = await createConnection({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.schema
        });
        return databaseConnection;

    };
};
