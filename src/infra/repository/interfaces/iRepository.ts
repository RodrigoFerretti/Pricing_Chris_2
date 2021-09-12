import { TableMap } from "../../mappers/interfaces/TableMap";
import { Filter } from "./Filter"


export interface IRepository<T, PK extends (keyof T)[]> {
    tableMap: TableMap<T>;
    getById(id: Pick<T, PK[number]>): Promise<T>;
    getFirst(filter: Filter<T>): Promise<T>;
};
