import { RequestContext } from "./RequestObjects"

import { Seller } from "../Domain/Entities/Seller"
import { Client } from "../Domain/Entities/Client"
import { Product } from "../Domain/Entities/Product"
import { Segment } from "../Domain/Entities/Segment"
import { Location } from "../Domain/Entities/Location"
import { LocationPrice } from "../Domain/Entities/LocationPrice"
import { City } from "../Domain/Entities/City"
import { CityPrice } from "../Domain/Entities/CityPrice"
import { State } from "../Domain/Entities/State"
import { StatePrice } from "../Domain/Entities/StatePrice"

import { SegmentModel } from "../Domain/DBModels/Segment"
import { LocationModel } from "../Domain/DBModels/Location";
import { LocationPriceModel } from "../Domain/DBModels/LocationPrice"
import { CityModel } from "../Domain/DBModels/City"
import { CityPriceModel } from "../Domain/DBModels/CityPrice"
import { StateModel } from "../Domain/DBModels/State"
import { StatePriceModel } from "../Domain/DBModels/StatePrice"



export class NegotiationEntities {

    public async from(requestContext: RequestContext) {
        const segment: Segment = await this.getSegment(requestContext.client);
        const location: Location = await this.getLocation(requestContext.client);
        const locationPrice: LocationPrice = await this.getLocationPrice(requestContext.product, location, segment);
        const city: City = await this.getCity(location);
        const cityPrice: CityPrice = await this.getCityPrice(requestContext.product, city, segment);
        const state: State = await this.getState(location);
        const statePrice: StatePrice = await this.getStatePrice(requestContext.product, state, segment);
        const negotiationDTO: NegotiationContext = new NegotiationContext({
            client: requestContext.client,
            product: requestContext.product,
            seller: requestContext.seller,
            priceOffer: requestContext.priceOffer,
            segment: segment,
            location: location,
            locationPrice: locationPrice,
            city: city,
            cityPrice: cityPrice,
            state: state,
            statePrice: statePrice,
        });
        return negotiationDTO;
    };

    private async getSegment(client: Client) {
        const segmentQueryResult: SegmentModel[`columns`] = await new SegmentModel().query().filter({
            id: client.segmentId
        }).first();
        const segment: Segment = new Segment({
            id: segmentQueryResult.id,
            name: segmentQueryResult.name
        });
        return segment;
    };

    private async getLocation(client: Client) {
        const locationQueryResult: LocationModel[`columns`] = await new LocationModel().query().filter({
            id: client.locationId
        }).first();
        const location: Location = new Location({
            id: locationQueryResult.id,
            name: locationQueryResult.name,
            cityId: locationQueryResult.city_id,
            stateId: locationQueryResult.state_id
        });
        return location;
    };

    private async getLocationPrice(product: Product, location: Location, segment: Segment) {
        const locationPriceQueryResult: LocationPriceModel[`columns`] = await new LocationPriceModel().query().filter({
            product_id: product.id, 
            location_id: location.id, 
            segment_id: segment.id
        }).first();
        const locationPrice: LocationPrice = new LocationPrice({
            productId: locationPriceQueryResult.product_id,
            locationId: locationPriceQueryResult.location_id,
            segmentId: locationPriceQueryResult.segment_id,
            price: locationPriceQueryResult.price,
            transportationPrice: locationPriceQueryResult.transportation_price
        });
        return locationPrice;
    };

    private async getCity(location: Location) {
        const cityQueryResult: CityModel[`columns`] = await new CityModel().query().filter({
            id: location.cityId
        }).first();
        const city: City = new City({
            id: cityQueryResult.id,
            name: cityQueryResult.name,
            stateId: cityQueryResult.state_id
        });
        return city;
    };

    private async getCityPrice(product: Product, city: City, segment: Segment) {
        const cityPriceQueryResult: CityPriceModel[`columns`] = await new CityPriceModel().query().filter({
            product_id: product.id, 
            city_id: city.id, 
            segment_id: segment.id
        }).first();
        const cityPrice: CityPrice = new CityPrice({
            productId: cityPriceQueryResult.product_id,
            cityId: cityPriceQueryResult.city_id,
            segmentId: cityPriceQueryResult.segment_id,
            price: cityPriceQueryResult.price
        });
        return cityPrice;
    };

    private async getState(location: Location) {
        const stateQueryResult: StateModel[`columns`] = await new StateModel().query().filter({
            id: location.id
        }).first();
        const state: State = new State({
            id: stateQueryResult.id,
            name: stateQueryResult.name,
        });
        return state;
    };

    private async getStatePrice(product: Product, state: State, segment: Segment) {
        const statePriceQueryResult: StatePriceModel[`columns`] = await new StatePriceModel().query().filter({
            product_id: product.id, 
            state_id: state.id, 
            segment_id: segment.id
        }).first();
        const statePrice: StatePrice = new StatePrice({
            productId: statePriceQueryResult.product_id,
            stateId: statePriceQueryResult.state_id,
            segmentId: statePriceQueryResult.segment_id,
            price: statePriceQueryResult.price
        });
        return statePrice;
    };

    // private async getHighestClientTPV() {
    //     const clientQueryResult: ClientModel[`columns`] = await new ClientModel().query().orderBy(`tpv`).first();
    //     const highestTPV: number = clientQueryResult.tpv
    //     return highestTPV;

    // };
};

export class NegotiationContext {
    client: Client;
    product: Product;
    seller: Seller;
    priceOffer: number;
    segment: Segment;
    location: Location;
    locationPrice: LocationPrice;
    city: City;
    cityPrice: CityPrice;
    state: State;
    statePrice: StatePrice;

    constructor(negotiationContext: NegotiationContext) {
        this.client = negotiationContext.client;
        this.product = negotiationContext.product;
        this.seller = negotiationContext.seller;
        this.priceOffer = negotiationContext.priceOffer;
        this.segment = negotiationContext.segment;
        this.location = negotiationContext.location;
        this.locationPrice = negotiationContext.locationPrice;
        this.city = negotiationContext.city;
        this.cityPrice = negotiationContext.cityPrice;
        this.state = negotiationContext.state;
        this.statePrice = negotiationContext.statePrice;
    };
};
