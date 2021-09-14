import { IRepository } from "../interfaces/iRepository"
import { TableMap } from "../../mappers/interfaces/TableMap"
import { Query } from "../../database/query"
import { Filter } from "../types/filter";


export abstract class Repository<T, PK extends (keyof T)[]> implements IRepository<T, PK> {
    private tableMap: TableMap<T>;

    constructor(tableMap: TableMap<T>) {
        this.tableMap = tableMap;
    };

    public async getById(primaryKeys: Pick<T, PK[number]>) {
        const query: Query<T> = new Query<T>(this.tableMap).select().where(primaryKeys);
        const entity: T = await query.first();
        return entity;
    };

    public async getFirst(filter?: Filter<T>) {
        let query: Query<T> = new Query<T>(this.tableMap).select();
        if (filter != undefined) {
            if (filter.where != undefined) {
                query = query.where(filter.where);
            };
            if (filter.orderBy != undefined) {
                query = query.orderBy(filter.orderBy.key, filter.orderBy.sorting)
            };
        }
        const entity: T = await query.first();
        return entity;
    };
};
