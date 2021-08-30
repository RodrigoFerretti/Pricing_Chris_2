import { ExcludeMethods } from "../utils/excludeMethodsType";


export class Client {
    id: number;
    name: string;
    tpv: number;
    segmentId: number;
    locationId: number;

    constructor({id, name, tpv, segmentId, locationId}: ExcludeMethods<Client>) {
        this.id = id;
        this.name = name;
        this.tpv = tpv;
        this.segmentId = segmentId;
        this.locationId = locationId;
    };

    public getLevel(highestClientTPV: number) {
        const level: number = (this.tpv <= highestClientTPV / 3) ? 1 
                            : (this.tpv <= highestClientTPV * 2 / 3) ? 2 
                            : (this.tpv <= highestClientTPV) ? 3 
                            : 1;
        return level;
    };

};
