import { Client } from "../../domain/client"
import { TableMap } from "../tableMap"
import { ExcludeMethods } from "../../utils/excludeMethodsType"


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
