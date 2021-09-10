import { TableMap } from "../../mappers/interfaces/TableMap";
import { Filter } from "./Filter"


export interface IRepository<T> {
    entityMap: TableMap<T>;
    primaryKey: keyof T;
    getById(id: any): Promise<T>;
    getFirst(filter: Filter<T>): Promise<T>;
};
