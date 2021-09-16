import { StatePrice } from "../../domain/statePrice";
import { StatePriceMap } from "../mappers/statePriceMap";
import { Repository } from "./abstract/repository";


export class StatePriceRepository extends Repository<StatePrice, typeof StatePriceMap.primaryKeys> {
    constructor() {
        const statePriceMap: StatePriceMap = new StatePriceMap();
        super(statePriceMap);
    };
};
