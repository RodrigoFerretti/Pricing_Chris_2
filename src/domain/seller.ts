export class Seller {
    id: number;
    name: string;
    type: number;

    constructor({id, name, type}: Seller) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

