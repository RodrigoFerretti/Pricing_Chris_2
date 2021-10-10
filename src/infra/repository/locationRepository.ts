import { Location } from "../../domain/location";
import { LocationTable } from "../tables/locationTable";
import { Repository } from "./abstract/repository";


export class LocationRepository extends Repository<Location> {
    constructor() {
        const locationMap: LocationTable = new LocationTable();
        super(locationMap);
    };

    async getById(primaryKeys: Pick<Location, LocationTable['primaryKeys'][number]>) {
        return await super.getById<LocationTable['primaryKeys']>(primaryKeys);
    };
};
