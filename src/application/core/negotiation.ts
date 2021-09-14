import { Client } from "../../domain/client";
import { Product } from "../../domain/product";
import { Seller } from "../../domain/seller";
import { Segment } from "../../domain/segment";
import { Location } from "../../domain/location";
import { City } from "../../domain/city";
import { State } from "../../domain/state";
import { LocationPrice } from "../../domain/locationPrice";
import { CityPrice } from "../../domain/cityPrice";
import { StatePrice } from "../../domain/statePrice";

import { ClientLevel } from "./clientLevel";
import { ProductRevenue } from "./productRevenue";
import { ProfitsAndLooses } from "./profitsAndLooses";

import { NegotiationAddress } from "./negotiationAddress";
import { NegotiationPrices } from "./negotiationPrices";
import { NegotiationResult } from "./negotiationResult";


export class Negotiation {
    client: Client; 
    product: Product;
    seller: Seller;
    priceOffer: number;
    segment: Segment;
    address: NegotiationAddress;
    prices: NegotiationPrices;

    constructor(
        client: Client, 
        product: Product, 
        seller: Seller, 
        priceOffer: number, 
        segment: Segment, 
        location: Location, 
        city: City, 
        state: State, 
        locationPrice: LocationPrice, 
        cityPrice: CityPrice, 
        statePrice: StatePrice
    ) {
        this.client = client;
        this.product = product;
        this.seller = seller;
        this.priceOffer = priceOffer;
        this.segment = segment;
        this.address = new NegotiationAddress(location, city, state);
        this.prices = new NegotiationPrices(locationPrice, cityPrice, statePrice)
    };

    async getResult() {
        const clientLevel: number = await new ClientLevel(this.client).getLevel();
        const negotiationLevel: number = (clientLevel > this.seller.type) ? clientLevel : this.seller.type;
        const minimumPrice: number = this.prices.getOrderedArray(`desc`)[negotiationLevel - 1].price;
        const offerIsHigherThanMinimum: boolean = (this.priceOffer > minimumPrice) ? true : false;
        const finalPrice: number = (offerIsHigherThanMinimum) ? this.priceOffer : minimumPrice;
        const revenue: number = new ProductRevenue(this.client, this.product, finalPrice).getRevenue();
        const profitsAndLooses: ProfitsAndLooses = new ProfitsAndLooses(
            this.product, revenue, this.prices.locationPrice.transportationPrice
        );
        const result: NegotiationResult = new NegotiationResult(
            negotiationLevel, 
            minimumPrice, 
            offerIsHigherThanMinimum, 
            finalPrice, 
            profitsAndLooses
        );
        return result;
    };
};
