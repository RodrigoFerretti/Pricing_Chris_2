import { Location } from "../../domain/location";
import { LocationMap } from "../mappers/locationMap";
import { Repository } from "./abstract/repository";


export class LocationRepository extends Repository<Location> {
    constructor() {
        const locationMap: LocationMap = new LocationMap();
        super(locationMap);
    };

    public async getById(primaryKeys: Pick<Location, LocationMap['primaryKeys'][number]>) {
        return await super.getById<LocationMap['primaryKeys']>(primaryKeys);
    };
};
