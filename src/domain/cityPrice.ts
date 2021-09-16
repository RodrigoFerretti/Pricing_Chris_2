export class CityPrice {
    productId: number;
    cityId: number;
    segmentId: number;
    price: number;

    constructor({productId, cityId, segmentId, price}: CityPrice) {
        this.productId = productId;
        this.cityId = cityId;
        this.segmentId = segmentId;
        this.price = price;
    }
}
