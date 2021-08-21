import { Client } from "../../../Domain/Entities/Client"
import { Seller } from "../../../Domain/Entities/Seller"
import { Product } from "../../../Domain/Entities/Product"

import { ClientModel } from "../../../Domain/DBModels/Client"
import { SellerModel } from "../../../Domain/DBModels/Seller"
import { ProductModel } from "../../../Domain/DBModels/Product"


class NegotiationDTO {
    private clientId: number;
    private sellerId: number;
    private productId: number;
    private priceOffer: number;

    constructor(clientId: number, sellerId: number, productId: number, priceOffer: number) {
        this.clientId = clientId;
        this.sellerId = sellerId;
        this.productId = productId;
        this.priceOffer = priceOffer;
    }

    public async getObjects() {
        const clientObject: Client = await this.getClientById(this.clientId);
        const sellerObject: Seller = await this.getSellerById(this.sellerId);
        const productObject: Product = await this.getProductById(this.productId);
        const transferObject = {
            client: clientObject, 
            seller: sellerObject, 
            product: productObject, 
            priceOffer: this.priceOffer
        }
        return transferObject;
    }

    private async getClientById(clientId: number) {
        const clientModel: ClientModel = new ClientModel();
        const clientModelObject = await clientModel.query().filter({id: this.clientId}).first();
        const clientObject: Client = {
            id: clientModelObject.id,
            name: clientModelObject.name,
            tpv: clientModelObject.tpv,
            segmentId: clientModelObject.segment_id,
            locationId: clientModelObject.location_id
        }
        console.log(typeof clientObject);
        return clientObject;
    }

    private async getSellerById(sellerId: number) {
        const sellerModel: SellerModel = new SellerModel();
        const sellerModelObject = await sellerModel.query().filter({id: this.sellerId}).first();
        const sellerObject: Seller = {
            id: sellerModelObject.id,
            name: sellerModelObject.name,
            type: sellerModelObject.type
        }
        console.log(typeof sellerObject);
        return sellerObject;

    }

    private async getProductById(productId: number) {
        const productModel: ProductModel = new ProductModel();
        const productModelObject = await productModel.query().filter({id: this.productId}).first();
        const productObject: Product = {
            id: productModelObject.id,
            name: productModelObject.name,
            fabricationCosts: productModelObject.fabrication_costs
        }
        console.log(typeof productObject);
        return productObject;
    }

}

const main = async () => {
    const negotiationDTO: NegotiationDTO = new NegotiationDTO(10, 1, 1, 10);
    const transferObject = await negotiationDTO.getObjects();
    console.log(transferObject);
}

main();