import { DbModel } from "../../Setup/DbModel"


export class ClientModel extends DbModel {
    tableName = `client`;
    columns!: {
        id: number,
        name: string,
        tpv: number,
        segment_id: number,
        location_id: number
    }
}
