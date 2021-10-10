import { City } from "../../domain/city";
import { CityTable } from "../tables/cityTable";
import { Repository } from "./abstract/repository";


export class CityRepository extends Repository<City> {
    constructor() {
        const cityMap: CityTable = new CityTable();
        super(cityMap);
    };

    async getById(primaryKeys: Pick<City, CityTable['primaryKeys'][number]>) {
        return await super.getById<CityTable['primaryKeys']>(primaryKeys);
    };
};
