import { iTable } from "../../tables/interfaces/iTable"
import { Query } from "../../database/query"
import { Filter } from "../types/filter";


export abstract class Repository<T> {
    private table: iTable<T>;

    constructor(table: iTable<T>) {
        this.table = table;
    };

    async getById<PK extends readonly (keyof T)[]>(primaryKeys: Pick<T, PK[number]>) {
        const query: Query<T> = new Query<T>(this.table).select().where(primaryKeys);
        const entity: T = await query.first();
        return entity;
    };

    async getFirst(filter?: Filter<T>) {
        let query: Query<T> = new Query<T>(this.table).select();
        query = (filter?.where) ? query.where(filter.where) : query;
        query = (filter?.orderBy) ? query.orderBy(filter.orderBy.key, filter.orderBy.sorting) : query;
        const entity: T = await query.first();
        return entity;
    };
};
