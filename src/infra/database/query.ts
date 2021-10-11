import { iTable } from "../tables/interfaces/iTable"
import { Database } from "../database/database"
import { Where, Comparison } from "../repository/types/filter";
import { HttpException } from "../errors/httpException"


export class Query<T> {
    sql!: string;
    table: iTable<T>;

    constructor(table: iTable<T>) {
        this.table = table;
    };

    select() {
        const columns: string = Array.from(
            Object.entries(this.table.columns) as [keyof T, string][], 
            ([key, value]) => `${value} '${key}'`
        ).join(`, `);
        this.sql = `SELECT ${columns} FROM ${this.table.name}`;
        return this;
    };

    where(properties: Where<T>) {
        const fullComparison: string = Array.from(
            Object.entries(properties) as [keyof T, Comparison<T, keyof T>][],
            ([key, comparison]) => {
                let tableColumn: string = `${this.table.name}.${this.table.columns[key]}`;
                if (typeof comparison === `object`) {
                    if (`higherThan` in comparison)      return `${tableColumn} > '${comparison.higherThan}'`
                    if (`lowerThan` in comparison)       return `${tableColumn} < '${comparison.lowerThan}'`
                    if (`higherEqualThan` in comparison) return `${tableColumn} >= '${comparison.higherEqualThan}'`
                    if (`lowerEqualThan` in comparison)  return `${tableColumn} <= '${comparison.lowerEqualThan}'`
                };
                return `${tableColumn}  = '${comparison}'`
            }
        ).join(` AND `);
        this.sql = (fullComparison !== '') ? `${this.sql} WHERE ${fullComparison}` : this.sql;
        return this;
    };

    orderBy(key: keyof T, sorting: `asc` | `desc` = `asc`) {
        this.sql += ` ORDER BY ${this.table.name}.${this.table.columns[key]} ${sorting}`;
        return this;
    };

    async first() {
        this.sql += ` LIMIT 1`;
        const connection = await Database.getConnection();
        const [rows]: [T[], any] = await connection.query(this.sql) as [T[], any];
        const firstRow: T = rows[0];
        if (firstRow) return firstRow;
        throw new HttpException(400, `${this.table.name} not found`);
    };
};
