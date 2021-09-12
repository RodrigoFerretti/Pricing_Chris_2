import { LocationPrice } from "../../domain/locationPrice";
import { LocationPriceMap } from "../mappers/locationPriceMap";
import { Repository } from "./abstract/repository";


export class LocationPriceRepository extends Repository<LocationPrice, [`productId`, `locationId`, `segmentId`]> {
    constructor() {
        const locationPriceMap: LocationPriceMap = new LocationPriceMap();
        super(locationPriceMap);
    };
};
