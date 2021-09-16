import { City } from "../../domain/city";
import { CityMap } from "../mappers/cityMap";
import { Repository } from "./abstract/repository";


export class CityRepository extends Repository<City, typeof CityMap.primaryKeys> {
    constructor() {
        const cityMap: CityMap = new CityMap();
        super(cityMap);
    };
};
