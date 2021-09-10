export interface IQuery<T> {
    select(): object;
    where(properties: Partial<T>): object;
    orderBy(key: keyof T, sorting: `asc` | `desc`): object;
    first(): Promise<T>;
};
