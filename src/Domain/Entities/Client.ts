export class Client {
    id: number;
    name: string;
    tpv: number;
    segmentId: number;
    locationId: number;

    constructor({id, name, tpv, segmentId, locationId}: Client) {
        this.id = id;
        this.name = name;
        this.tpv = tpv;
        this.segmentId = segmentId;
        this.locationId = locationId;
    }
}
