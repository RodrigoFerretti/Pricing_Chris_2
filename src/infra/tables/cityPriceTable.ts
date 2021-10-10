import { CityPrice } from "../../domain/cityPrice"
import { iTable } from "./interfaces/iTable"


export class CityPriceTable implements iTable<CityPrice> {
    name = `city_price`;
    columns = {
        productId: `product_id`,
        cityId: `city_id`,
        segmentId: `segment_id`,
        price: `price`
    };
    primaryKeys = [`productId`, `cityId`, `segmentId`] as const;
};
