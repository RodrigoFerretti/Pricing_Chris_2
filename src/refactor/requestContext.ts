import { Client } from "../domain/client"
import { Seller } from "../domain/seller"
import { Product } from "../domain/product"

import { ClientModel } from "../infra/DBModels/Client"
import { SellerModel } from "../infra/DBModels/Seller"
import { ProductModel } from "../infra/DBModels/Product"

import { requestJSON } from "../app"


export class RequestContext {
    client!: Client;
    seller!: Seller;
    product!: Product;
    priceOffer!: number;

    public async from(requestJSON: requestJSON) {
        const client: Client = await this.getClientById(requestJSON.clientId);
        const seller: Seller = await this.getSellerById(requestJSON.sellerId);
        const product: Product = await this.getProductById(requestJSON.productId);

        this.client = client;
        this.seller = seller; 
        this.product = product; 
        this.priceOffer = requestJSON.priceOffer;

        return this;
    };

    private async getClientById(clientId: number) {
        const clientQueryResult: ClientModel[`columns`] = await new ClientModel().select().where({
            id: clientId
        }).limit();
        const client: Client = new Client({
            id: clientQueryResult.id,
            name: clientQueryResult.name,
            tpv: clientQueryResult.tpv,
            segmentId: clientQueryResult.segment_id,
            locationId: clientQueryResult.location_id
        });
        return client;
    };

    private async getSellerById(sellerId: number) {
        const sellerQueryResult: SellerModel[`columns`] = await new SellerModel().select().where({
            id: sellerId
        }).limit();
        const seller: Seller = new Seller({
            id: sellerQueryResult.id,
            name: sellerQueryResult.name,
            type: sellerQueryResult.type
        });
        return seller;
    };

    private async getProductById(productId: number) {
        const productQueryResult: ProductModel[`columns`] = await new ProductModel().select().where({
            id: productId
        }).limit();
        const product: Product = new Product({
            id: productQueryResult.id,
            name: productQueryResult.name,
            fabricationCosts: productQueryResult.fabrication_costs
        });
        return product;
    };
};
