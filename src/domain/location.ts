export class Location implements IStandardPK {
    id: number;
    name: string;
    cityId: number;
    stateId: number;


    constructor({id, name, cityId, stateId}: Location) {
        this.id = id;
        this.name = name;
        this.cityId = cityId;
        this.stateId = stateId;
    }
}
