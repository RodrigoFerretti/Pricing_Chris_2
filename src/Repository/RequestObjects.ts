import { Client } from "../Domain/Entities/Client"
import { Seller } from "../Domain/Entities/Seller"
import { Product } from "../Domain/Entities/Product"

import { ClientModel } from "../Domain/DBModels/Client"
import { SellerModel } from "../Domain/DBModels/Seller"
import { ProductModel } from "../Domain/DBModels/Product"


export class RequestEntities {

    public async from(requestJSON: requestJSON) {
        const client: Client = await this.getClientById(requestJSON.clientId);
        const seller: Seller = await this.getSellerById(requestJSON.sellerId);
        const product: Product = await this.getProductById(requestJSON.productId);
        const requestContext: RequestContext = new RequestContext({
            client: client, 
            seller: seller, 
            product: product, 
            priceOffer: requestJSON.priceOffer
        });
        return requestContext;
    };

    private async getClientById(clientId: number) {
        const clientQueryResult: ClientModel[`columns`] = await new ClientModel().query().filter({
            id: clientId
        }).first();
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
        const sellerQueryResult: SellerModel[`columns`] = await new SellerModel().query().filter({
            id: sellerId
        }).first();
        const seller: Seller = new Seller({
            id: sellerQueryResult.id,
            name: sellerQueryResult.name,
            type: sellerQueryResult.type
        });
        return seller;
    };

    private async getProductById(productId: number) {
        const productQueryResult: ProductModel[`columns`] = await new ProductModel().query().filter({
            id: productId
        }).first();
        const product: Product = new Product({
            id: productQueryResult.id,
            name: productQueryResult.name,
            fabricationCosts: productQueryResult.fabrication_costs
        });
        return product;
    };
};

export type requestJSON = {
    clientId: number;
    sellerId: number;
    productId: number;
    priceOffer: number;
};

export class RequestContext {
    client: Client;
    seller: Seller;
    product: Product;
    priceOffer: number;

    constructor(requestDTO: RequestContext) {
        this.client = requestDTO.client;
        this.seller = requestDTO.seller;
        this.product = requestDTO.product;
        this.priceOffer = requestDTO.priceOffer;
    };
};
