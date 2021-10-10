import { City } from "../../domain/city"
import { iTable } from "./interfaces/iTable"


export class CityTable implements iTable<City> {
    name = `city`;
    columns = {
        id: `id`,
        name: `name`,
        stateId: `state_id`
    };
    primaryKeys = [`id`] as const;
};
