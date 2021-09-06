import { Client } from "../../domain/client";
import { DbModel } from "../DbModel"


export class ClientModel extends DbModel {
    tableName = `client`;
    columns!: {
        id: number,
        name: string,
        tpv: number,
        segment_id: number,
        location_id: number
    };
    relativeAttributes!: {
        id: `id`,
        name: `name`,
        tpv: `tpv`,
        segment_id: `segmentId`,
        location_id: `locationId`
    };
    domainClass!: Client
};
