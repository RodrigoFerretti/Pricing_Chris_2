import { DbModel } from "../../Setup/DbModel"


export class SellerModel extends DbModel {
    tableName = `seller`;
    columns!: {
        id: number,
        name: string,
        type: number
    }
}
