import { Location } from "../../domain/location"
import { iTableMap } from "./interfaces/iTableMap"


export class LocationMap implements iTableMap<Location> {
    public name = `location`;
    public columnsMap = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
    static primaryKeys = [`id`] as const;
};
