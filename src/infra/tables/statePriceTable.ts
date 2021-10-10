import { StatePrice } from "../../domain/statePrice"
import { iTable } from "./interfaces/iTable"


export class StatePriceTable implements iTable<StatePrice> {
    name = `state_price`;
    columns = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
    primaryKeys = [`productId`, `stateId`, `segmentId`] as const;
};
