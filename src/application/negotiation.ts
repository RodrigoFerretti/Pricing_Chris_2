import { Client } from "../domain/client";
import { Product } from "../domain/product";
import { Segment } from "../domain/segment";
import { Seller } from "../domain/seller";
import { Location } from "../domain/location";
import { LocationPrice } from "../domain/locationPrice";
import { City } from "../domain/city";
import { CityPrice } from "../domain/cityPrice";
import { State } from "../domain/state";
import { StatePrice } from "../domain/statePrice";
import { NegotiationContext } from "../repository/negotiationEntities";
import { ExcludeMethods } from "../utils/excludeMethodsType";


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
    level: number;
    minimumPrice: number;
    offerIsHigherThanMinimum: boolean;
    finalPrice: number;
    // monthlyProfitsAndLooses!: ProfitsAndLooses;


    constructor(negotiationContext: ExcludeMethods<NegotiationContext>, highestTPV: number) {
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
        this.level = this.getLevel(highestTPV);
        this.minimumPrice = this.getMinimumPrice();
        this.offerIsHigherThanMinimum = this.getPriceOfferIsHigherThanMinimum();
        this.finalPrice = this.getFinalPrice();
    };

    private getLevel(highestTPV: number) {
        const clientLevel: number = this.client.getLevel(highestTPV);
        const level: number = (clientLevel > this.seller.type) ? clientLevel : this.seller.type;
        return level;
    };

    private getMinimumPrice() {
        const price: number = this.prices.getOrderedDescending()[this.level - 1];
        return price;
    };

    private getPriceOfferIsHigherThanMinimum() {
        const priceOfferIsHigherThatMinimum: boolean = (this.priceOffer > this.minimumPrice) ? true : false;
        return priceOfferIsHigherThatMinimum;
    };

    private getFinalPrice() {
        const finalPrice: number = (this.offerIsHigherThanMinimum) ? this.priceOffer : this.minimumPrice;
        return finalPrice;
    };
};


export class NegotiationPrices {
    locationPrice: LocationPrice;
    cityPrice: CityPrice;
    statePrice: StatePrice;

    constructor(negotiationPrices: ExcludeMethods<NegotiationPrices>) {
        this.locationPrice = negotiationPrices.locationPrice;
        this.cityPrice = negotiationPrices.cityPrice;
        this.statePrice = negotiationPrices.statePrice
    };

    public getOrderedDescending() {
        const pricesOrderedDescending: number[] = [
            this.locationPrice.price,
            this.cityPrice.price,
            this.statePrice.price
        ].sort((a, b) => b - a);
        return pricesOrderedDescending;
    };
};
