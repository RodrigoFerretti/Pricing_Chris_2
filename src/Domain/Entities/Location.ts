export class Location {
    id: number;
    name: string;
    cityId: number;
    stateId: number;


    constructor(id: number, name: string, cityId: number, stateId: number) {
        this.id = id;
        this.name = name;
        this.cityId = cityId;
        this.stateId = stateId;
    }
}