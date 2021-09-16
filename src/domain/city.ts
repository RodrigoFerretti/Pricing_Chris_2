export class City {
    id: number;
    name: string;
    stateId: number;

    constructor({id, name, stateId}: City) {
        this.id = id;
        this.name = name;
        this.stateId = stateId;
    };
};
