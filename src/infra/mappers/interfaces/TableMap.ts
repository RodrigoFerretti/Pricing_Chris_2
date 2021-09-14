import { columnsMap } from "../types/columnsMap";


export interface TableMap<T> {
    name: string;
    columnsMap: columnsMap<T>;
};
