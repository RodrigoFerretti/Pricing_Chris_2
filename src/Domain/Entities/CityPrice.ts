export class CityPrice {
    productId: number;
    cityId: number;
    segmentId: number;
    price: number;

    constructor(productId: number, cityId: number, segmentId: number, price: number) {
        this.productId = productId;
        this.cityId = cityId;
        this.segmentId = segmentId;
        this.price = price;
    }
}