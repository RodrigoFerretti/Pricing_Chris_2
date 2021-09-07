import { CityPrice } from "../../../domain/cityPrice"
import { ITableMap } from "../iTableMap"


export class CityPriceMap implements ITableMap<CityPrice> {
    name = `cityprice`;
    columnsMap = {
        productId: `product_id`,
        cityId: `city_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
