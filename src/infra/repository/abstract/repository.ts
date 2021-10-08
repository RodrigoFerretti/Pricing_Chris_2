import { iTableMap } from "../../mappers/interfaces/iTableMap"
import { Query } from "../../database/query"
import { Filter } from "../types/filter";


export abstract class Repository<T> {
    private tableMap: iTableMap<T>;

    constructor(tableMap: iTableMap<T>) {
        this.tableMap = tableMap;
    };

    public async getById<PK extends readonly (keyof T)[]>(primaryKeys: Pick<T, PK[number]>) {
        const query: Query<T> = new Query<T>(this.tableMap).select().where(primaryKeys);
        const entity: T = await query.first();
        return entity;
    };

    public async getFirst(filter?: Filter<T>) {
        let query: Query<T> = new Query<T>(this.tableMap).select();
        query = (filter?.where) ? query.where(filter.where) : query;
        query = (filter?.orderBy) ? query.orderBy(filter.orderBy.key, filter.orderBy.sorting) : query;
        const entity: T = await query.first();
        return entity;
    };
};
