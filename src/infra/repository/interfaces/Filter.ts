export interface Filter<T> {
    where?: Partial<T>,
    orderBy?: {
        key: keyof T,
        sorting?: `asc` | `desc`
    }
};
