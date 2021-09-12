import { iDatabase } from "./interfaces/iDatabase";
import { createConnection, Connection } from "mysql2/promise"
import { config as dotenv } from "dotenv"


dotenv();

export class Database implements iDatabase {
    public host: string | undefined;
    public port: number | undefined;
    public user: string | undefined;
    public password: string | undefined;
    public schema: string | undefined; 

    constructor() {
        this.host = process.env.db_host;
        this.port = parseInt(process.env.port!);
        this.user = process.env.db_user;
        this.password = process.env.db_password;
        this.schema = process.env.db_schema;
    };

    public async connect() {
        try {
            const databaseConnection: Connection = await createConnection({
                host: this.host,
                port: this.port,
                user: this.user,
                password: this.password,
                database: this.schema
            });
            return databaseConnection;
        } catch (error) {
            console.log(error);
            return Promise.reject(`internal server error`);
        };
    };
};
