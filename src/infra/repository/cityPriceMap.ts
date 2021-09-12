import { CityPrice } from "../../domain/cityPrice";
import { CityPriceMap } from "../mappers/cityPriceMap";
import { Repository } from "./abstract/repository";


export class CityPriceRepository extends Repository<CityPrice, [`productId`, `cityId`, `segmentId`]> {
    constructor() {
        const cityPriceMap: CityPriceMap = new CityPriceMap();
        super(cityPriceMap);
    };
};
