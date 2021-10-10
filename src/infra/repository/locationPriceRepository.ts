import { LocationPrice } from "../../domain/locationPrice";
import { LocationPriceTable } from "../tables/locationPriceTable";
import { Repository } from "./abstract/repository";


export class LocationPriceRepository extends Repository<LocationPrice> {
    constructor() {
        const locationPriceMap: LocationPriceTable = new LocationPriceTable();
        super(locationPriceMap);
    };

    async getById(primaryKeys: Pick<LocationPrice, LocationPriceTable['primaryKeys'][number]>) {
        return await super.getById<LocationPriceTable['primaryKeys']>(primaryKeys);
    };
};
