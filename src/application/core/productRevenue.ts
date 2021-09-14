import { Client } from "../../domain/client";
import { Product } from "../../domain/product";


export class ProductRevenue {
    client: Client;
    product: Product
    price: number;

    constructor(client: Client, product: Product, finalPrice: number) {
        this.client = client;
        this.product = product;
        this.price = finalPrice;
    };

    getRevenue() {
        let revenue: number;
        if (this.product.id == 1) {
            revenue = this.price * this.client.tpv / 10;
        }
        else if (this.product.id == 2) {
            revenue = this.price / 10;
        }
        else {
            revenue = this.price
        return revenue;
    };
};
