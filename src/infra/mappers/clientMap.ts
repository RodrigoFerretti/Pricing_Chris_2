import { Client } from "../../domain/client"
import { TableMap } from "./interfaces/TableMap"


export class ClientMap implements TableMap<Client> {
    name = `client`;
    columnsMap = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
};
