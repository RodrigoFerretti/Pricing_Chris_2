import { StatePrice } from "../../domain/statePrice";
import { StatePriceMap } from "../mappers/statePriceMap";
import { Repository } from "./abstract/repository";


export class StatePriceRepository extends Repository<StatePrice> {
    constructor() {
        const statePriceMap: StatePriceMap = new StatePriceMap();
        super(statePriceMap);
    };

    public async getById(primaryKeys: Pick<StatePrice, StatePriceMap['primaryKeys'][number]>) {
        return await super.getById<StatePriceMap['primaryKeys']>(primaryKeys);
    };
};
