export class LocationPrice {
    productId: number;
    locationId: number;
    segmentId: number;
    price: number;
    transportationCosts: number;

    constructor({productId, locationId, segmentId, price, transportationCosts}: LocationPrice) {
        this.productId = productId;
        this.locationId = locationId;
        this.segmentId = segmentId;
        this.price = price;
        this.transportationCosts = transportationCosts;

    }
}
