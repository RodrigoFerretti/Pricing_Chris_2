import { Client } from "../../domain/client"
import { iTableMap } from "./interfaces/iTableMap"


export class ClientMap implements iTableMap<Client> {
    public name = `client`;
    public columnsMap = {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        locationId: `location_id`,
        segmentId: `segment_id`
    };
    static primaryKeys = [`id`] as const;
};
