import { CityPrice } from "../../domain/cityPrice"
import { TableMap } from "../tableMap"


export class CityPriceMap implements TableMap<CityPrice> {
    name = `cityprice`;
    columnsMap = {
        productId: `product_id`,
        cityId: `city_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
