import { DbModel } from "../../Setup/DbModel"


export class StateModel extends DbModel {
    tableName = `state`;
    columns!: {
        id: number,
        name: string
    }
}
