import { DbModel } from "../DbModel"


export class StateModel extends DbModel {
    tableName = `state`;
    columns!: {
        id: number,
        name: string
    };
};
