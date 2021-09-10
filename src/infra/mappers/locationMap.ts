import { Location } from "../../domain/location"
import { TableMap } from "./interfaces/TableMap"


export class LocationMap implements TableMap<Location> {
    name = `location`;
    columnsMap = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
};
