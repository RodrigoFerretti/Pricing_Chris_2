import { DbModel } from "../../Setup/DbModel"


export class CityPriceModel extends DbModel {
    tableName = `cityprice`;
    columns!: {
        product_id: number,
        city_id: number,
        segment_id: number,
        price: number
    }
}
