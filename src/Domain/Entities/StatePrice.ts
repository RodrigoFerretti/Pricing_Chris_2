export class StatePrice {
    productId: number;
    stateId: number;
    segmentId: number;
    price: number;

    constructor(productId: number, stateId: number, segmentId: number, price: number) {
        this.productId = productId;
        this.stateId = stateId;
        this.segmentId = segmentId;
        this.price = price;
    }
}