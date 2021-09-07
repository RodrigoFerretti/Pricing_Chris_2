import { ITableMap } from "../mappers/iTableMap"
import { Database } from "../database/database"


interface IQuery<T> {
    select(): object;
    where(properties: Partial<T>): object;
    orderBy(key: keyof T, sorting: `asc` | `desc`): object;
    first(): Promise<T>;

};

export class Query<T> implements IQuery<T> {
    private sql!: string;
    private tableName: string;
    private tableColumns: Map<string, string>;

    constructor(tableMap: ITableMap<T>) {
        this.tableName = tableMap.name;
        this.tableColumns = new Map(Object.entries(tableMap.columnsMap));
    };

    public select() {
        const columns: string = Array.from(
            this.tableColumns, ([key, value]) => 
            `${value} ${key}`
        ).join(`, `);
        const sql: string = `SELECT ${columns} FROM ${this.tableName}`;
        this.sql = sql;
        return this;
    }

    public where(properties: Partial<T>) {
        const columnsEquals: string = Array.from(
            new Map(Object.entries(properties)), ([key, value]) => 
            `${this.tableName}.${this.tableColumns.get(key)} = ${value}`
        ).join(` AND `);
        this.sql = (columnsEquals == undefined) ? `${this.sql} WHERE ${columnsEquals}` : this.sql;
        return this;
    };

    public orderBy(key: keyof T, sorting: `asc` | `desc` = `asc`) {
        this.sql += ` ORDER BY ${this.tableName}.${this.tableColumns.get(key.toString())} ${sorting}`;
        return this;
    };

    public async first() {
        this.sql += ` LIMIT 1`
        const connection = await new Database().connection();
        const [rows]: object[] = await connection.query(this.sql);
        const rowsResult: T[] = JSON.parse(JSON.stringify(rows));
        const firstRow: T | null = (rowsResult[0] == undefined) ? null : rowsResult[0];
        return (firstRow == null) ? Promise.reject(`${this.tableName} not found`) : firstRow
    };
};
