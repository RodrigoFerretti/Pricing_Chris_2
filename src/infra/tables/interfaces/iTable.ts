export interface iTable<T> {
    name: string;
    columns: {
        [Property in keyof T]: string;
    };
    primaryKeys: readonly (keyof T)[];
};
