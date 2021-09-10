import { Connection } from "mysql2/promise"

export interface iDatabase {
    host: string | undefined;
    port: number | undefined;
    user: string | undefined;
    password: string | undefined;
    schema: string | undefined;
    connect(): Promise<Connection>;
};
