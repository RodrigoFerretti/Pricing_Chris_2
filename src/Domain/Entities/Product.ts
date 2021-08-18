export class Product {
    id: number;
    name: string;
    fabricationCosts: number;

    constructor(id: number, name: string, fabricationCosts: number) {
        this.id = id;
        this.name = name;
        this.fabricationCosts = fabricationCosts;
    }
}