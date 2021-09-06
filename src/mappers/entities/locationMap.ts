import { Location } from "../../domain/location"
import { DatabaseTableMap } from "../tableMap"


export class LocationMap implements DatabaseTableMap<Location> {
    tableName = `location`;
    columnsMap = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
};
