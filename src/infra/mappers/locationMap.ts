import { Location } from "../../domain/location"
import { iTableMap } from "./interfaces/iTableMap"


export class LocationMap implements iTableMap<Location> {
    name = `location`;
    columnsMap = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
};
