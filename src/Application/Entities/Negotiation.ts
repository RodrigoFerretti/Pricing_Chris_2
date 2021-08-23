import { Client } from "../../Domain/Entities/Client";
import { Product } from "../../Domain/Entities/Product";
import { Seller } from "../../Domain/Entities/Seller";



export class Negotiation {
    client: Client;
    seller: Seller;
    product: Product;
    priceOffer: number;

    constructor({client, seller, product, priceOffer}: Negotiation) {
        this.client = client;
        this.seller = seller;
        this.product = product ;
        this.priceOffer = priceOffer;
    }

}