export type Filter<T> = {
    where?: Where<T>,
    orderBy?: {
        key: keyof T,
        sorting?: `asc` | `desc`
    }
};

export type Where<T> = {
    [P in keyof T]?: Comparison<T, P>
}

export type Comparison<T, P extends keyof T> = 
    T[P] | 
    { higherThan: number } | 
    { lowerThan: number } | 
    { higherEqualThan: number } | 
    { lowerEqualThan: number }
