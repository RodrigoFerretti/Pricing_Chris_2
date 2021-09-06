import { TableMap } from "../mappers/tableMap"



type selectOptions<T> = {
    where: Partial<T>,
    orderBy: {
        key: keyof T,
        sorting: `asc` | `desc`
    }
};

interface IRepository<T> {
    getById(id: number): Promise<T>;
    getFirst(options: selectOptions<T>): Promise<T>;
};

// export class GenericRepository<T> implements IRepository<T> {

// };

class Select<T> {
    private sql: string;
    private tableMap: TableMap<T>;

    constructor(tableMap: TableMap<T>) {
        let sql: string = `SELECT `
        for (let [key, value] of Object.entries(tableMap)) {
            sql += `${value} ${key}, `
        }
        sql = sql.slice(0, -1) + ` FROM ${tableMap.name}`
        this.sql = sql;
        this.tableMap = tableMap;
    };

    public where(properties: Partial<T>) {
        this.sql += ` WHERE `
        for (let [key, value] of Object.entries(properties)) {

                
        }
    };

    public orderBy() {

    };

    public first() {

    }
};
