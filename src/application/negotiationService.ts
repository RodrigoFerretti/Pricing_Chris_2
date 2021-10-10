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
import { CityPriceRepository } from "../infra/repository/cityPriceRepository";
import { StatePriceRepository } from "../infra/repository/statePriceRepository";


import { Negotiation } from "./negotiation/negotiation";
import { NegotiationRequest } from "./negotiation/negotiationRequest";
import { NegotiationResponse } from "./negotiation/negotiationResponse";
import { TPVRange } from "../domain/tpvRange";
import { TPVRangeRepository } from "../infra/repository/tpvRangeRepository";
import { NegotiationResult } from "./negotiation/negotiationResult";


export class NegotiationService {
    negotiationRequest: NegotiationRequest;
    
    constructor(negotiationRequest: NegotiationRequest) {
        this.negotiationRequest = negotiationRequest;
    };

    async getResponse() {
        const client: Client = await this.getClient();
        const seller: Seller = await this.getSeller();
        const product: Product = await this.getProduct();
        const segment: Segment = await this.getSegment(client);
        const location: Location = await this.getLocation(client);
        const city: City = await this.getCity(location);
        const state: State = await this.getState(city);
        const locationPrice: LocationPrice = await this.getLocationPrice(product, location, segment);
        const cityPrice: CityPrice = await this.getCityPrice(product, city, segment);
        const statePrice: StatePrice = await this.getStatePrice(product, state, segment);
        const tpvRange: TPVRange = await this.getTPVRange(client);
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
            statePrice,
            tpvRange
        );
        const negotiationResult: NegotiationResult = await negotiation.getResult();
        const negotiationResponse: NegotiationResponse = negotiationResult.getResponse();
        return negotiationResponse;
    };

    private async getClient() {
        const client: Client = await new ClientRepository().getById(
            {
                id: this.negotiationRequest.clientId
            }
        );
        return client;
    };

    private async getSeller() {
        const seller: Seller = await new SellerRepository().getById(
            {
                id: this.negotiationRequest.sellerId
            }
        );
        return seller;     
    };

    private async getProduct() {
        const product: Product = await new ProductRepository().getById(
            {
                id: this.negotiationRequest.productId
            }
        );
        return product;
    };

    private async getSegment(client: Client) {
        const segment: Segment = await new SegmentRepository().getById(
            {
                id: client.segmentId
            }
        );
        return segment;
    };

    private async getLocation(client: Client) {
        const location: Location = await new LocationRepository().getById(
            {
                id: client.locationId
            }
        );
        return location;
    };

    private async getCity(location: Location) {
        const city: City = await new CityRepository().getById(
            {
                id: location.cityId
            }
        );
        return city;
    };

    private async getState(city: City) {
        const state: State = await new StateRepository().getById(
            {
                id: city.stateId
            }
        );
        return state;
    };

    protected async getLocationPrice(product: Product, location: Location, segment: Segment) {
        const locationPrice: LocationPrice = await new LocationPriceRepository().getById(
            {
                productId: product.id,
                locationId: location.id,
                segmentId: segment.id,
            }
        );
        return locationPrice;
    };

    protected async getCityPrice(product: Product, city: City, segment: Segment) {
        const cityPrice: CityPrice = await new CityPriceRepository().getById(
            {
                productId: product.id,
                cityId: city.id,
                segmentId: segment.id,
            }
        );
        return cityPrice;
    };

    protected async getStatePrice(product: Product, state: State, segment: Segment) {
        const statePrice: StatePrice = await new StatePriceRepository().getById(
            {
                productId: product.id,
                stateId: state.id,
                segmentId: segment.id
            }
        );
        return statePrice;
    };

    private async getTPVRange(client: Client) {
        const tpvRange: TPVRange = await new TPVRangeRepository().getByTPV(client.tpv);
        return tpvRange;
    };
};
