import { City } from "../../../domain/city"
import { ITableMap } from "../iTableMap"


export class CityMap implements ITableMap<City> {
    name = `city`;
    columnsMap = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
};
