import { Database } from "./DbConnect"
import { Connection } from "mysql2/promise"


export class DbModel {
    private sqlStatement!: string;
    public tableName!: string;
    public columns!: object;

    public query() {
        this.sqlStatement = `SELECT * FROM ${this.tableName}`;
        return this;
    };

    public filter(modelObject: Partial<this[`columns`]>) {
        this.sqlStatement += ` WHERE`;
        for (let [key, value] of Object.entries(modelObject)) {
            this.sqlStatement += ` ${this.tableName}.${key} = '${value}' AND`
        };
        this.sqlStatement = this.sqlStatement.slice(0, -3);
        return this;
    };

    public orderBy(modelColumn: keyof this[`columns`], direction: `ASC`|`DESC` = `ASC`) {
        this.sqlStatement += ` ORDER BY ${this.tableName}.${modelColumn} ${direction}`
        return this;
    };

    public async all() {
        try {
            const connection: Connection = await new Database().connection();
            const [rows]: this[`columns`][] = await connection.query(this.sqlStatement);
            const rowsResponse: this[`columns`][] = JSON.parse(JSON.stringify(rows));
            if (rowsResponse == []) {
                return Promise.reject(`no ${this.tableName} found`);
            };
            return rowsResponse;
        } catch (error) {
            console.log(error);
            return Promise.reject(`internal server error`);
        };
    };


    public async first() {
        try {
            this.sqlStatement += ` LIMIT 1`;
            const connection = await new Database().connection();
            const [rows]: this[`columns`][] = await connection.query(this.sqlStatement);
            const rowsResponse: this[`columns`][] = JSON.parse(JSON.stringify(rows));
            const firstRow: this[`columns`] | null = (rowsResponse[0] == undefined) ? null : rowsResponse[0];
            if (firstRow == null) {
                return Promise.reject(`${this.tableName} not found`);
            };
            return firstRow;
        } catch (error) {
            console.log(error);
            return Promise.reject(`internal server error`);
        };
    };
};
