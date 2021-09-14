import { City } from "../../domain/city";
import { CityMap } from "../mappers/cityMap";
import { Repository } from "./abstract/repository";
import { CityPK } from "./types/cityPK";


export class CityRepository extends Repository<City, CityPK> {
    constructor() {
        const cityMap: CityMap = new CityMap();
        super(cityMap);
    };
};

