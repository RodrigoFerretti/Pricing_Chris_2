export type tableColumns<T> = {
    [Property in keyof T]: string;
};
