import { Location } from "../../domain/location";
import { LocationMap } from "../mappers/locationMap";
import { Repository } from "./abstract/repository";


export class LocationRepository extends Repository<Location, IStandardPK> {
    constructor() {
        const locationMap: LocationMap = new LocationMap();
        super(locationMap);
    };
};
