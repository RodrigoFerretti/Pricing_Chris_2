import { StatePrice } from "../../domain/statePrice";
import { StatePriceTable } from "../tables/statePriceTable";
import { Repository } from "./abstract/repository";


export class StatePriceRepository extends Repository<StatePrice> {
    constructor() {
        const statePriceMap: StatePriceTable = new StatePriceTable();
        super(statePriceMap);
    };

    async getById(primaryKeys: Pick<StatePrice, StatePriceTable['primaryKeys'][number]>) {
        return await super.getById<StatePriceTable['primaryKeys']>(primaryKeys);
    };
};
