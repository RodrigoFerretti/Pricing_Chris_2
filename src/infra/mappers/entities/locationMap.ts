import { Location } from "../../../domain/location"
import { ITableMap } from "../iTableMap"


export class LocationMap implements ITableMap<Location> {
    name = `location`;
    columnsMap = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
};
