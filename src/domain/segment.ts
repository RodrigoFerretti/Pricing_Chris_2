export class Segment implements IStandardPK {
    id: number;
    name: string;

    constructor({id, name}: Segment) {
        this.id = id;
        this.name = name;
    };
};
