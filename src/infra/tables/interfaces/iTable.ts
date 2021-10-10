import { tableColumns } from "../types/tableColumns";


export interface iTable<T> {
    name: string;
    columns: tableColumns<T>;
    primaryKeys: readonly (keyof T)[];
};
