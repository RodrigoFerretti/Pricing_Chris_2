import { Client } from "../../domain/client"
import { DatabaseTableMap } from "../tableMap"
import { ExcludeMethods } from "../../utils/excludeMethodsType"


export class ClientMap implements DatabaseTableMap<ExcludeMethods<Client>> {
    tableName = `client`;
    columnsMap = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
};
