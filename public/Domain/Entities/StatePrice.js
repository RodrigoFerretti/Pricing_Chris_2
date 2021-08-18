"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatePrice = void 0;
var StatePrice = /** @class */ (function () {
    function StatePrice(productId, stateId, segmentId, price) {
        this.productId = productId;
        this.stateId = stateId;
        this.segmentId = segmentId;
        this.price = price;
    }
    return StatePrice;
}());
exports.StatePrice = StatePrice;
