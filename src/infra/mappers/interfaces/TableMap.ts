export interface TableMap<T> {
    name: string;
    columnsMap: columnsMap<T>;
};

type columnsMap<T> = {
    [Property in keyof T]: string;
};
