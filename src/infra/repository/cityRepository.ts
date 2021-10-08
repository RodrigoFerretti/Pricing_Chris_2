import { City } from "../../domain/city";
import { CityMap } from "../mappers/cityMap";
import { Repository } from "./abstract/repository";


export class CityRepository extends Repository<City> {
    constructor() {
        const cityMap: CityMap = new CityMap();
        super(cityMap);
    };

    public async getById(primaryKeys: Pick<City, CityMap['primaryKeys'][number]>) {
        return await super.getById<CityMap['primaryKeys']>(primaryKeys);
    };
};
