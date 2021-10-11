import { createConnection, Connection } from "mysql2/promise"
import { config as dotenv } from "dotenv"
import { HttpException } from "../errors/httpException"


export class Database {
    private static connection: Connection;

    static async getConnection() {
        if (!this.connection) {
            dotenv();
            const dbConnection: Connection = await createConnection(
                {
                    host: process.env.db_host!,
                    port: parseInt(process.env.db_port!),
                    user: process.env.db_user!,
                    password: process.env.db_password!,
                    database: process.env.db_schema!
                }
            ).catch((error) => {
                console.log(error.message);
                throw new HttpException(400, `internal server error`);
            });
            this.connection = dbConnection;
        };
        return this.connection;
    };
};
