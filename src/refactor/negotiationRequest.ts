import { Seller } from "../domain/seller"
import { Client } from "../domain/client"
import { Product } from "../domain/product"
import { Segment } from "../domain/segment"
import { Location } from "../domain/location"
import { LocationPrice } from "../domain/locationPrice"
import { City } from "../domain/city"
import { CityPrice } from "../domain/cityPrice"
import { State } from "../domain/state"
import { StatePrice } from "../domain/statePrice"

import { ClientModel } from "../infra/DBModels/Client"
import { ProductModel } from "../infra/DBModels/Product"
import { SellerModel } from "../infra/DBModels/Seller"
import { SegmentModel } from "../infra/DBModels/Segment"
import { LocationModel } from "../infra/DBModels/Location";
import { LocationPriceModel } from "../infra/DBModels/LocationPrice"
import { CityModel } from "../infra/DBModels/City"
import { CityPriceModel } from "../infra/DBModels/CityPrice"
import { StateModel } from "../infra/DBModels/State"
import { StatePriceModel } from "../infra/DBModels/StatePrice"


import { requestJSON } from "../app"


export class NegotiationRequest {
    client!: Client;
    seller!: Seller;
    product!: Product;
    priceOffer!: number;
    segment!: Segment;
    location!: Location;
    locationPrice!: LocationPrice;
    city!: City;
    cityPrice!: CityPrice;
    state!: State;
    statePrice!: StatePrice;

    public async from(requestJSON: requestJSON) {
        const client: Client = await this.getClientById(requestJSON.clientId);
        const seller: Seller = await this.getSellerById(requestJSON.sellerId);
        const product: Product = await this.getProductById(requestJSON.productId);
        const segment: Segment = await this.getSegment(client);
        const location: Location = await this.getLocation(client);
        const locationPrice: LocationPrice = await this.getLocationPrice(product, location, segment);
        const city: City = await this.getCity(location);
        const cityPrice: CityPrice = await this.getCityPrice(product, city, segment);
        const state: State = await this.getState(location);
        const statePrice: StatePrice = await this.getStatePrice(product, state, segment);

        this.client = client;
        this.seller = seller; 
        this.product = product; 
        this.priceOffer = requestJSON.priceOffer;
        this.segment = segment;
        this.location = location;
        this.locationPrice = locationPrice;
        this.city = city;
        this.cityPrice = cityPrice;
        this.state = state;
        this.statePrice = statePrice;

        return this;
    };

    private async getClientById(clientId: number) {
        const clientQueryResult: ClientModel[`columns`] = await new ClientModel().select().where({
            id: clientId
        }).limit();
        const client: Client = new Client({
            id: clientQueryResult.id,
            name: clientQueryResult.name,
            tpv: clientQueryResult.tpv,
            segmentId: clientQueryResult.segment_id,
            locationId: clientQueryResult.location_id
        });
        return client;
    };

    private async getSellerById(sellerId: number) {
        const sellerQueryResult: SellerModel[`columns`] = await new SellerModel().select().where({
            id: sellerId
        }).limit();
        const seller: Seller = new Seller({
            id: sellerQueryResult.id,
            name: sellerQueryResult.name,
            type: sellerQueryResult.type
        });
        return seller;
    };

    private async getProductById(productId: number) {
        const productQueryResult: ProductModel[`columns`] = await new ProductModel().select().where({
            id: productId
        }).limit();
        const product: Product = new Product({
            id: productQueryResult.id,
            name: productQueryResult.name,
            fabricationCosts: productQueryResult.fabrication_costs
        });
        return product;
    };

    private async getSegment(client: Client) {
        const segmentQueryResult: SegmentModel[`columns`] = await new SegmentModel().select().where({
            id: client.segmentId
        }).limit();
        const segment: Segment = new Segment({
            id: segmentQueryResult.id,
            name: segmentQueryResult.name
        });
        return segment;
    };

    private async getLocation(client: Client) {
        const locationQueryResult: LocationModel[`columns`] = await new LocationModel().select().where({
            id: client.locationId
        }).limit();
        const location: Location = new Location({
            id: locationQueryResult.id,
            name: locationQueryResult.name,
            cityId: locationQueryResult.city_id,
            stateId: locationQueryResult.state_id
        });
        return location;
    };

    private async getLocationPrice(product: Product, location: Location, segment: Segment) {
        const locationPriceQueryResult: LocationPriceModel[`columns`] = await new LocationPriceModel().select().where({
            product_id: product.id, 
            location_id: location.id, 
            segment_id: segment.id
        }).limit();
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
        const cityQueryResult: CityModel[`columns`] = await new CityModel().select().where({
            id: location.cityId
        }).limit();
        const city: City = new City({
            id: cityQueryResult.id,
            name: cityQueryResult.name,
            stateId: cityQueryResult.state_id
        });
        return city;
    };

    private async getCityPrice(product: Product, city: City, segment: Segment) {
        const cityPriceQueryResult: CityPriceModel[`columns`] = await new CityPriceModel().select().where({
            product_id: product.id, 
            city_id: city.id, 
            segment_id: segment.id
        }).limit();
        const cityPrice: CityPrice = new CityPrice({
            productId: cityPriceQueryResult.product_id,
            cityId: cityPriceQueryResult.city_id,
            segmentId: cityPriceQueryResult.segment_id,
            price: cityPriceQueryResult.price
        });
        return cityPrice;
    };

    private async getState(location: Location) {
        const stateQueryResult: StateModel[`columns`] = await new StateModel().select().where({
            id: location.id
        }).limit();
        const state: State = new State({
            id: stateQueryResult.id,
            name: stateQueryResult.name,
        });
        return state;
    };

    private async getStatePrice(product: Product, state: State, segment: Segment) {
        const statePriceQueryResult: StatePriceModel[`columns`] = await new StatePriceModel().select().where({
            product_id: product.id, 
            state_id: state.id, 
            segment_id: segment.id
        }).limit();
        const statePrice: StatePrice = new StatePrice({
            productId: statePriceQueryResult.product_id,
            stateId: statePriceQueryResult.state_id,
            segmentId: statePriceQueryResult.segment_id,
            price: statePriceQueryResult.price
        });
        return statePrice;
    };

};
