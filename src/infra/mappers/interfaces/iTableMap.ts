import { columnsMap } from "../types/columnsMap";


export interface iTableMap<T> {
    name: string;
    columnsMap: columnsMap<T>;
    primaryKeys: readonly (keyof T)[];
};
