export class LocationPrice {
    productId: number;
    locationId: number;
    segmentId: number;
    price: number;
    transportationPrice: number;

    constructor({productId, locationId, segmentId, price, transportationPrice}: LocationPrice) {
        this.productId = productId;
        this.locationId = locationId;
        this.segmentId = segmentId;
        this.price = price;
        this.transportationPrice = transportationPrice;

    }
}
