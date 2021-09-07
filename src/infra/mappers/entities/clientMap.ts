import { Client } from "../../../domain/client"
import { ITableMap } from "../iTableMap"
import { ExcludeMethods } from "../../types/excludeMethods"


export class ClientMap implements ITableMap<ExcludeMethods<Client>> {
    name = `client`;
    columnsMap = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
};
