import { DbModel } from "../DbModel"


export class LocationPriceModel extends DbModel {
    tableName = `locationprice`;
    columns!: {
        product_id: number,
        location_id: number,
        segment_id: number,
        price: number,
        transportation_price: number
    };
};
