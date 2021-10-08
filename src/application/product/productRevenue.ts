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

    public getRevenue() {
        let revenue: number;
        if (this.product.id == 1) {
            revenue = this.price * this.client.tpv / 10;
            return revenue;
        }
        else if (this.product.id == 2) {
            revenue = this.price / 10;
            return revenue;
        }
        else if (this.product.id == 3) {
            revenue = this.price
            return revenue;
        };
        throw Error(`product revenue not found`);
    };
};
