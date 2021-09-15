import { Filter } from "../types/filter"


export interface IRepository<T extends PK, PK> {
    getById(primaryKeys: PK): Promise<T>;
    getFirst(filter: Filter<T>): Promise<T>;
};
