import { Client } from "../../domain/client"
import { TableMap } from "./interfaces/TableMap"
import { ExcludeMethods } from "../types/excludeMethods"


export class ClientMap implements TableMap<ExcludeMethods<Client>> {
    name = `client`;
    columnsMap = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
};
