import { City } from "../../domain/city"
import { iTableMap } from "./interfaces/iTableMap"


export class CityMap implements iTableMap<City> {
    name = `city`;
    columnsMap = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
};
