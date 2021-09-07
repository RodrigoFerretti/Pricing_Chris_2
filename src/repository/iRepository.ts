export interface Repository<T> {
    getById(id: number): Promise<T>;
    getFirst(filter: selectFilter<T>): Promise<T>;
};

export interface selectFilter<T> {
    where?: Partial<T>,
    orderBy?: {
        key: keyof T,
        sorting?: `asc` | `desc`
    }
};
