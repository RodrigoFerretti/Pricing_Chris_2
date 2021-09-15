import { StatePrice } from "../../domain/statePrice"
import { iTableMap } from "./interfaces/iTableMap"


export class StatePriceMap implements iTableMap<StatePrice> {
    name = `stateprice`;
    columnsMap = {
        productId: `product_id`,
        stateId: `state_id`,
        segmentId: `segment_id`,
        price: `price`
    };
};
