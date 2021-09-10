import { StatePrice } from "../../domain/statePrice"
import { TableMap } from "./interfaces/TableMap"


export class StatePriceMap implements TableMap<StatePrice> {
    name = `state`;
    columnsMap = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
