import { StatePrice } from "../../../domain/statePrice"
import { ITableMap } from "../iTableMap"


export class StatePriceMap implements ITableMap<StatePrice> {
    name = `state`;
    columnsMap = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
