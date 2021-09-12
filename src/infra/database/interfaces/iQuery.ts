export interface IQuery<T> {
    select(): IQuery<T>;
    where(properties: Partial<T>): IQuery<T>;
    orderBy(key: keyof T, sorting: `asc` | `desc`): IQuery<T>;
    first(): Promise<T>;
};
