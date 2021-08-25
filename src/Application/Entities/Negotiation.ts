import { Client } from "../../Domain/Entities/Client";
import { Product } from "../../Domain/Entities/Product";
import { Segment } from "../../Domain/Entities/Segment";
import { Seller } from "../../Domain/Entities/Seller";
import { Location } from "../../Domain/Entities/Location";
import { LocationPrice } from "../../Domain/Entities/LocationPrice";
import { City } from "../../Domain/Entities/City";
import { CityPrice } from "../../Domain/Entities/CityPrice";
import { State } from "../../Domain/Entities/State";
import { StatePrice } from "../../Domain/Entities/StatePrice";


export class Negotiation {
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
    highestClientTPV: number;

    constructor(negotiationData: Negotiation) {
        this.client = negotiationData.client;
        this.product = negotiationData.product;
        this.seller = negotiationData.seller;
        this.priceOffer = negotiationData.priceOffer;
        this.segment = negotiationData.segment;
        this.location = negotiationData.location;
        this.locationPrice = negotiationData.locationPrice;
        this.city = negotiationData.city;
        this.cityPrice = negotiationData.cityPrice;
        this.state = negotiationData.state;
        this.statePrice = negotiationData.statePrice;
        this.highestClientTPV = negotiationData.highestClientTPV;
    };
};
