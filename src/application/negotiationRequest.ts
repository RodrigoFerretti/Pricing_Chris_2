export class NegotiationRequest {
    clientId: number;
    sellerId: number;
    productId: number;
    priceOffer: number;

    constructor({clientId, sellerId, productId, priceOffer}: NegotiationRequest) {
        this.clientId = clientId;
        this.sellerId = sellerId;
        this.productId = productId;
        this.priceOffer = priceOffer;
    };
};
