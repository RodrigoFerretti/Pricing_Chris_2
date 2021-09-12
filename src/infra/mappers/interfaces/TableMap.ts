export interface TableMap<T> {
    name: string;
    columnsMap: columnsMap<T>;
};

export type columnsMap<T> = {
    [Property in keyof T]: string;
};