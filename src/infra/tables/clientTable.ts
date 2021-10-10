import { Client } from "../../domain/client"
import { iTable } from "./interfaces/iTable"


export class ClientTable implements iTable<Client> {
    name = `client`;
    columns = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
    primaryKeys = [`id`] as const;
};
