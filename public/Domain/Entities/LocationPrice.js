"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationPrice = void 0;
var LocationPrice = /** @class */ (function () {
    function LocationPrice(productId, locationId, segmentId, price, tranportationCosts) {
        this.productId = productId;
        this.locationId = locationId;
        this.segmentId = segmentId;
        this.price = price;
        this.transportationCosts = tranportationCosts;
    }
    return LocationPrice;
}());
exports.LocationPrice = LocationPrice;
