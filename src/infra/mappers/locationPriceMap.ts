import { LocationPrice } from "../../domain/locationPrice"
import { TableMap } from "./interfaces/TableMap"


export class LocationPriceMap implements TableMap<LocationPrice> {
    name = `locationprice`;
    columnsMap = {
        productId: `product_id`,
        locationId: `city_id`,
        segmentId: `segment_id`,
        price: `price`,
        transportationPrice: `transportation_price`
    };
};
