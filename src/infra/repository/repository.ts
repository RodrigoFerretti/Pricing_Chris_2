import { IRepository } from "./interfaces/iRepository"
import { TableMap } from "../mappers/interfaces/TableMap"
import { Query } from "../database/query"
import { Filter } from "./interfaces/Filter";


export abstract class Repository<T> implements IRepository<T> {
    public entityMap: TableMap<T>;
    public primaryKey: keyof T;

    constructor(primaryKey: keyof T, entityMap: TableMap<T>) {
        this.entityMap = entityMap;
        this.primaryKey = primaryKey;
    };

    public async getById(id: Pick<T, typeof this.primaryKey>) {
        const query: Query<T> = new Query<T>(this.entityMap).select().where(id);
        const entity: T = await query.first();
        return entity;
    };

    public async getFirst(filter: Filter<T>) {
        let query: Query<T> = new Query<T>(this.entityMap).select();
        if (filter.where != undefined) {
            query = query.where(filter.where);
        };
        if (filter.orderBy != undefined) {
            query = query.orderBy(filter.orderBy.key, filter.orderBy.sorting)
        };
        const entity: T = await query.first();
        return entity;
    };
};
