import { City } from "../../domain/city"
import { DatabaseTableMap } from "../tableMap"


export class CityMap implements DatabaseTableMap<City> {
    tableName = `city`;
    columnsMap = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
};
