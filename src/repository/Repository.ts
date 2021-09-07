import { Seller } from "../domain/seller";
import { TableMap } from "../mappers/tableMap"
import { Database } from "../setup/DbConnect";



type selectOptions<T> = {
    where?: Partial<T>,
    orderBy?: {
        key: keyof T,
        sorting?: `asc` | `desc`
    }
};

interface IRepository<T> {
    getById(id: number): Promise<T>;
    getFirst(options: selectOptions<T>): Promise<T>;
};

// export class GenericRepository<T> implements IRepository<T> {

// };

interface ISelect<T> {
    sql: string;
    tableName: string;
    tableColumns: Map<string, string>
    select(): string;
    where(properties: Partial<T>): object;
    orderBy(key: keyof T, sorting: `asc` | `desc`): object;
    first(): Promise<T>;

}

class Select<T> implements ISelect<T> {
    private sql: string;
    private tableName: string;
    private tableColumns: Map<string, string>;

    constructor(tableMap: TableMap<T>) {
        this.tableName = tableMap.name;
        this.tableColumns = new Map(Object.entries(tableMap.columnsMap));
        this.sql = this.select();
    };

    private select() {
        const columns: string = Array.from(
            this.tableColumns, ([key, value]) => 
            `${value} ${key}`
        ).join(`, `);
        const sql: string = `SELECT ${columns} FROM ${this.tableName}`;
        return sql;
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
        try {
            this.sql += ` LIMIT 1`
            const connection = await new Database().connection();
            const [rows]: object[] = await connection.query(this.sql);
            const rowsResult: T[] = JSON.parse(JSON.stringify(rows));
            const firstRow: T | null = (rowsResult[0] == undefined) ? null : rowsResult[0];
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
