import { createConnection } from "mysql2/promise"
import { config as dotenv } from "dotenv"


export class Database {

    public async connection() {
        dotenv();

        const databaseConnection = await createConnection({
            host: process.env.db_host,
            port: parseInt(process.env.port!),
            user: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_schema
        })
    
        return databaseConnection;

    }
}