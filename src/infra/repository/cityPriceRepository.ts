import { CityPrice } from "../../domain/cityPrice";
import { CityPriceTable } from "../tables/cityPriceTable";
import { Repository } from "./abstract/repository";


export class CityPriceRepository extends Repository<CityPrice> {
    constructor() {
        const cityPriceMap: CityPriceTable = new CityPriceTable();
        super(cityPriceMap);
    };

    async getById(primaryKeys: Pick<CityPrice, CityPriceTable['primaryKeys'][number]>) {
        return await super.getById<CityPriceTable['primaryKeys']>(primaryKeys);
    };
};
