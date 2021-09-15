import { CityPrice } from "../../domain/cityPrice"
import { iTableMap } from "./interfaces/iTableMap"


export class CityPriceMap implements iTableMap<CityPrice> {
    name = `cityprice`;
    columnsMap = {
        productId: `product_id`,
        cityId: `city_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
