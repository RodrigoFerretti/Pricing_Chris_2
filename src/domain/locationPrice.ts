export class LocationPrice {
    productId: number;
    locationId: number;
    segmentId: number;
    price: number;
    transportationCost: number;

    constructor({productId, locationId, segmentId, price, transportationCost}: LocationPrice) {
        this.productId = productId;
        this.locationId = locationId;
        this.segmentId = segmentId;
        this.price = price;
        this.transportationCost = transportationCost;

    }
}
