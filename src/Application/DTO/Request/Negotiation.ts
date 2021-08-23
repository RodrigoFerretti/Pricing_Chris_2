import { Client } from "../../../Domain/Entities/Client"
import { Seller } from "../../../Domain/Entities/Seller"
import { Product } from "../../../Domain/Entities/Product"

import { ClientModel } from "../../../Domain/DBModels/Client"
import { SellerModel } from "../../../Domain/DBModels/Seller"
import { ProductModel } from "../../../Domain/DBModels/Product"

import { Negotiation } from "../../Entities/Negotiation"


export class NegotiationDTO {
    private clientId: number;
    private sellerId: number;
    private productId: number;
    private priceOffer: number;

    constructor({clientId, sellerId, productId, priceOffer}: NegotiationDTO) {
        this.clientId = clientId;
        this.sellerId = sellerId;
        this.productId = productId;
        this.priceOffer = priceOffer;
    }

    public async getTransferOfbject() {
        const client: Client = await this.getClientById(this.clientId);
        const seller: Seller = await this.getSellerById(this.sellerId);
        const product: Product = await this.getProductById(this.productId);
        const transferObject: Negotiation = {
            client: client, 
            seller: seller, 
            product: product, 
            priceOffer: this.priceOffer
        }
        return transferObject;
    }

    private async getClientById(clientId: number) {
        const clientQueryResult: ClientModel[`columns`] = await new ClientModel().query().filter({id: this.clientId}).first();
        const client: Client = new Client({
            id: clientQueryResult.id,
            name: clientQueryResult.name,
            tpv: clientQueryResult.tpv,
            segmentId: clientQueryResult.segment_id,
            locationId: clientQueryResult.location_id
        });
        return client;
    }

    private async getSellerById(sellerId: number) {
        const sellerQueryResult: SellerModel[`columns`] = await new SellerModel().query().filter({id: this.sellerId}).first();
        const seller: Seller = new Seller({
            id: sellerQueryResult.id,
            name: sellerQueryResult.name,
            type: sellerQueryResult.type
        });
        return seller;
    }

    private async getProductById(productId: number) {
        const productQueryResult: ProductModel[`columns`] = await new ProductModel().query().filter({id: this.productId}).first();
        const product: Product = new Product({
            id: productQueryResult.id,
            name: productQueryResult.name,
            fabricationCosts: productQueryResult.fabrication_costs
        });
        return product;
    }
}
