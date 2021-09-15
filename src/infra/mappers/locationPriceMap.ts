import { LocationPrice } from "../../domain/locationPrice"
import { iTableMap } from "./interfaces/iTableMap"


export class LocationPriceMap implements iTableMap<LocationPrice> {
    name = `locationprice`;
    columnsMap = {
        productId: `product_id`,
        locationId: `location_id`,
        segmentId: `segment_id`,
        price: `price`,
        transportationPrice: `transportation_price`
    };
};
