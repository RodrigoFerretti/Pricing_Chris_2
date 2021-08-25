import { DbModel } from "../../Setup/DbModel"


export class StatePriceModel extends DbModel {
    tableName = `stateprice`;
    columns!: {
        product_id: number,
        state_id: number,
        segment_id: number,
        price: number
    };
};
