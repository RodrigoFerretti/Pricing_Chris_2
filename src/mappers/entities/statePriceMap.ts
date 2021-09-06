import { StatePrice } from "../../domain/statePrice"
import { DatabaseTableMap } from "../tableMap"


export class StatePriceMap implements DatabaseTableMap<StatePrice> {
    tableName = `state`;
    columnsMap = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
