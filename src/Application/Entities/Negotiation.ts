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
import { NegotiationContext } from "../../Repository/NegotiationObjects";


export class Negotiation {
    client: Client;
    product: Product;
    seller: Seller;
    priceOffer: number;
    segment: Segment;
    location: Location;
    city: City;
    state: State;
    prices: NegotiationPrices;
    level: NegotiationLevel;
    minimumPrice: NegotiationMinimumPrice;
    offerIsProfitable: boolean;
    finalPrice: number;
    // monthlyProfitsAndLooses!: ProfitsAndLooses;


    constructor(negotiationContext: NegotiationContext) {
        this.client = negotiationContext.client;
        this.product = negotiationContext.product;
        this.seller = negotiationContext.seller;
        this.priceOffer = negotiationContext.priceOffer;
        this.segment = negotiationContext.segment;
        this.location = negotiationContext.location;
        this.city = negotiationContext.city;
        this.state = negotiationContext.state;
        this.prices = new NegotiationPrices({
            locationPrice: negotiationContext.locationPrice,
            cityPrice: negotiationContext.cityPrice,
            statePrice: negotiationContext.statePrice
        });
        // still going to implement client level
        this.level = new NegotiationLevel(1, this.seller.type);
        this.minimumPrice = new NegotiationMinimumPrice(this.prices, this.level);
        this.offerIsProfitable = (this.priceOffer > this.minimumPrice.price) ? true : false;
        this.finalPrice = (this.offerIsProfitable) ? this.priceOffer : this.minimumPrice.price
    };
};


export class NegotiationPrices {
    locationPrice: LocationPrice;
    cityPrice: CityPrice;
    statePrice: StatePrice;

    constructor(negotiationPrices: NegotiationPrices) {
        this.locationPrice = negotiationPrices.locationPrice;
        this.cityPrice = negotiationPrices.cityPrice;
        this.statePrice = negotiationPrices.statePrice
    };
};


export class NegotiationLevel {
    clientLevel: number;
    sellerType: number;
    level: number;

    constructor(clientLevel: number, sellerType: number) {
        this.clientLevel = clientLevel;
        this.sellerType = sellerType;
        this.level = (clientLevel > sellerType) ? clientLevel : sellerType;
    };
};


export class NegotiationMinimumPrice {
    prices: NegotiationPrices;
    negotiationLevel: NegotiationLevel;
    orderedPossiblePrices: number[]
    price: number;

    constructor(prices: NegotiationPrices, negotiationLevel: NegotiationLevel) {
        this.prices = prices;
        this.negotiationLevel = negotiationLevel;
        this.orderedPossiblePrices = [
            this.prices.locationPrice.price,
            this.prices.cityPrice.price,
            this.prices.statePrice.price
        ].sort((a, b) => b - a);
        this.price = this.orderedPossiblePrices[this.negotiationLevel.level];
    };
};