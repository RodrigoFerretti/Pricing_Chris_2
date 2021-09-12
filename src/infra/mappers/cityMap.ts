import { City } from "../../domain/city"
import { TableMap } from "./interfaces/TableMap"


export class CityMap implements TableMap<City> {
    name = `city`;
    columnsMap = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
};