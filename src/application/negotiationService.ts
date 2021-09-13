import { Client } from "../domain/client";
import { Product } from "../domain/product";
import { Segment } from "../domain/segment";
import { Seller } from "../domain/seller";
import { Location } from "../domain/location";
import { City } from "../domain/city";
import { State } from "../domain/state";
import { CityPrice } from "../domain/cityPrice";
import { StatePrice } from "../domain/statePrice";

import { ClientRepository } from "../infra/repository/clientRepository";
import { ProductRepository } from "../infra/repository/productRepository";
import { SegmentRepository } from "../infra/repository/segmentRepository";
import { SellerRepository } from "../infra/repository/sellerRepository";
import { LocationRepository } from "../infra/repository/locationRepository";
import { CityRepository } from "../infra/repository/cityRepository";
import { StateRepository } from "../infra/repository/stateRepository";
import { LocationPrice } from "../domain/locationPrice";
import { LocationPriceRepository } from "../infra/repository/locationPriceRepository";
import { CityPriceRepository } from "../infra/repository/cityPriceMap";
import { StatePriceRepository } from "../infra/repository/statePriceRepository";


import { Negotiation } from "./negotiation";
import { NegotiationRequest } from "./negotiationRequest";
import { NegotiationResult } from "./negotiationResult";


export class NegotiationService {
    negotiationRequest: NegotiationRequest;
    
    constructor(negotiationRequest: NegotiationRequest) {
        this.negotiationRequest = negotiationRequest;
    };
    async getResult() {
        const client: Client = await new ClientRepository().getById({
            id: this.negotiationRequest.clientId
        });
        const seller: Seller = await new SellerRepository().getById({
            id: this.negotiationRequest.sellerId
        });
        const product: Product = await new ProductRepository().getById({
            id: this.negotiationRequest.productId
        });
        const segment: Segment = await new SegmentRepository().getById({
            id: client.segmentId
        });
        const location: Location = await new LocationRepository().getById({
            id: client.locationId
        });
        const city: City = await new CityRepository().getById({
            id: location.cityId
        });
        const state: State = await new StateRepository().getById({
            id: city.stateId
        });
        const locationPrice: LocationPrice = await new LocationPriceRepository().getById({
            productId: product.id,
            locationId: location.id,
            segmentId: segment.id,
        });
        const cityPrice: CityPrice = await new CityPriceRepository().getById({
            productId: product.id,
            cityId: city.id,
            segmentId: segment.id,
        });
        const statePrice: StatePrice = await new StatePriceRepository().getById({
            productId: product.id,
            stateId: state.id,
            segmentId: segment.id
        });
        const negotiation: Negotiation = new Negotiation(
            client, 
            product, 
            seller, 
            this.negotiationRequest.priceOffer, 
            segment, 
            location, 
            city, 
            state, 
            locationPrice, 
            cityPrice, 
            statePrice
        );
        const result: NegotiationResult = await negotiation.getResult();
        return result;
    };
};
