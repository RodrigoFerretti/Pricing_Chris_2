import { Database } from "./DbConnect"


export class DbModel {
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

    public orderBy(modelColumn: keyof this[`columns`], direction: `ASC`|`DESC` = `ASC`) {
        this.sqlStatement += ` ORDER BY ${this.tableName}.${modelColumn} ${direction}`
        return this;
    }

    public async all() {
        const connection = await new Database().connection()
        const [rows]: this[`columns`][] = await connection.query(this.sqlStatement);
        const rowsResponse: this[`columns`][] = JSON.parse(JSON.stringify(rows));
        return rowsResponse;
    }

    public async first() {
        const connection = await new Database().connection()
        this.sqlStatement += ` LIMIT 1`;
        const [rows]: this[`columns`][] = await connection.query(this.sqlStatement);
        const rowsResponse: this[`columns`][] = JSON.parse(JSON.stringify(rows));
        const firstRow: this[`columns`] | null = (rowsResponse[0] == undefined) ? null : rowsResponse[0];
        return firstRow;
    }
}
