"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(id, name, tpv, segmentId, locationId) {
        this.id = id;
        this.name = name;
        this.tpv = tpv;
        this.segmentId = segmentId;
        this.locationId = locationId;
    }
    return Client;
}());
exports.Client = Client;
