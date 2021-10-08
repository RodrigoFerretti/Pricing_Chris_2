import { LocationPrice } from "../../domain/locationPrice";
import { LocationPriceMap } from "../mappers/locationPriceMap";
import { Repository } from "./abstract/repository";


export class LocationPriceRepository extends Repository<LocationPrice> {
    constructor() {
        const locationPriceMap: LocationPriceMap = new LocationPriceMap();
        super(locationPriceMap);
    };

    public async getById(primaryKeys: Pick<LocationPrice, LocationPriceMap['primaryKeys'][number]>) {
        return await super.getById<LocationPriceMap['primaryKeys']>(primaryKeys);
    };
};
