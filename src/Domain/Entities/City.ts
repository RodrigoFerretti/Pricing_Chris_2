export class City {
    id: number;
    name: string;
    stateId: number;

    constructor(id: number, name: string, stateId: number) {
        this.id = id;
        this.name = name;
        this.stateId = stateId;
    }
}