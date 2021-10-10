import { LocationPrice } from "../../domain/locationPrice"
import { iTable } from "./interfaces/iTable"


export class LocationPriceTable implements iTable<LocationPrice> {
    name = `location_price`;
    columns = {
        productId: `product_id`,
        locationId: `location_id`,
        segmentId: `segment_id`,
        price: `price`,
        transportationCost: `transportation_cost`
    };
    primaryKeys = [`productId`, `locationId`, `segmentId`] as const;
};
