import { Location } from "../../domain/location"
import { iTable } from "./interfaces/iTable"


export class LocationTable implements iTable<Location> {
    name = `location`;
    columns = {
        id: `id`,
        name: `name`,
        cityId: `city_id`,
        stateId: `state_id`
    };
    primaryKeys = [`id`] as const;
};
