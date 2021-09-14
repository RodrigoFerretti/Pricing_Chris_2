export type columnsMap<T> = {
    [Property in keyof T]: string;
};
