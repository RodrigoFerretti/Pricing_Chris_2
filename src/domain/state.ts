export class State implements IStandardPK {
    id: number;
    name: string;

    constructor({id, name}: State) {
        this.id = id;
        this.name = name;
    }
}
