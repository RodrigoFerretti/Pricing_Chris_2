import { City } from "../../domain/city"
import { iTableMap } from "./interfaces/iTableMap"


export class CityMap implements iTableMap<City> {
    public name = `city`;
    public columnsMap = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
    static primaryKeys = [`id`] as const;
};
