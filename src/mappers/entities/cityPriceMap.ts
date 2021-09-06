import { CityPrice } from "../../domain/cityPrice"
import { DatabaseTableMap } from "../tableMap"


export class CityPriceMap implements DatabaseTableMap<CityPrice> {
    tableName = `cityprice`;
    columnsMap = {
        productId: `product_id`,
        cityId: `city_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
