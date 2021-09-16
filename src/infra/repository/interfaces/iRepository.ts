import { Filter } from "../types/filter"


export interface IRepository<T, PK extends readonly (keyof T)[]> {
    getById(primaryKeys: Pick<T, PK[number]>): Promise<T>;
    getFirst(filter: Filter<T>): Promise<T>;
};
