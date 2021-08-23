export class Product {
    id: number;
    name: string;
    fabricationCosts: number;

    constructor({id, name, fabricationCosts}: Product) {
        this.id = id;
        this.name = name;
        this.fabricationCosts = fabricationCosts;
    }
}
