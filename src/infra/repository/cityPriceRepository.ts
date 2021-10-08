import { CityPrice } from "../../domain/cityPrice";
import { CityPriceMap } from "../mappers/cityPriceMap";
import { Repository } from "./abstract/repository";


export class CityPriceRepository extends Repository<CityPrice> {
    constructor() {
        const cityPriceMap: CityPriceMap = new CityPriceMap();
        super(cityPriceMap);
    };

    public async getById(primaryKeys: Pick<CityPrice, CityPriceMap['primaryKeys'][number]>) {
        return await super.getById<CityPriceMap['primaryKeys']>(primaryKeys);
    };
};
