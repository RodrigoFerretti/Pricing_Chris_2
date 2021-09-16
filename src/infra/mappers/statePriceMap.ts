import { StatePrice } from "../../domain/statePrice"
import { iTableMap } from "./interfaces/iTableMap"


export class StatePriceMap implements iTableMap<StatePrice> {
    public name = `stateprice`;
    public columnsMap = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
    static primaryKeys = [`productId`, `stateId`, `segmentId`] as const;
};
