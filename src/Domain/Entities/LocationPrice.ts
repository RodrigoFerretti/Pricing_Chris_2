export class LocationPrice {
    productId: number;
    locationId: number;
    segmentId: number;
    price: number;
    transportationCosts: number;

    constructor(productId: number, locationId: number, segmentId: number, price: number, tranportationCosts: number) {
        this.productId = productId;
        this.locationId = locationId;
        this.segmentId = segmentId;
        this.price = price;
        this.transportationCosts = tranportationCosts;

    }
}