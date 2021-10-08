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

import { ClientLevel } from "../client/clientLevel";
import { ProductRevenue } from "../product/productRevenue";
import { ProfitsAndLooses } from "../pnl/profitsAndLooses";

import { NegotiationAddress } from "./negotiationAddress";
import { NegotiationPrices } from "./negotiationPrices";
import { NegotiationResult } from "./negotiationResult";
import { NegotiationResponse } from "./negotiationResponse";
import { TPVRange } from "../../domain/tpvRange";


export class Negotiation {
    client: Client; 
    product: Product;
    seller: Seller;
    priceOffer: number;
    segment: Segment;
    address: NegotiationAddress;
    prices: NegotiationPrices;
    tpvRange: TPVRange;

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
        statePrice: StatePrice,
        tpvRange: TPVRange
    ) {
        this.client = client;
        this.product = product;
        this.seller = seller;
        this.priceOffer = priceOffer;
        this.segment = segment;
        this.address = new NegotiationAddress(location, city, state);
        this.prices = new NegotiationPrices(locationPrice, cityPrice, statePrice)
        this.tpvRange = tpvRange;
    };

    private async getResult() {
        const clientLevel: number = this.tpvRange.level;
        const negotiationLevel: number = (clientLevel > this.seller.type) ? clientLevel : this.seller.type;
        const minimumPrice: number = this.prices.getOrderedArray(`desc`)[negotiationLevel - 1].price;
        const offerHigherThanMinimum: boolean = (this.priceOffer > minimumPrice) ? true : false;
        const finalPrice: number = (offerHigherThanMinimum) ? this.priceOffer : minimumPrice;
        const revenue: number = await new ProductRevenue(this.client, this.product, finalPrice).getRevenue();
        const profitsAndLooses: ProfitsAndLooses = new ProfitsAndLooses(
            this.product, 
            revenue, 
            this.prices.locationPrice.transportationPrice
        );
        const negotiationResult: NegotiationResult = new NegotiationResult(
            negotiationLevel, 
            minimumPrice, 
            offerHigherThanMinimum, 
            finalPrice, 
            profitsAndLooses
        );
        return negotiationResult;
    };

    public async getResponse() {
        const negotiationResult: NegotiationResult = await this.getResult();
        const negotiationResponse: NegotiationResponse = new NegotiationResponse(
            {
                finalPrice: `R$ ${Number(negotiationResult.finalPrice).toFixed(2)}`,
                offerHigherThanMinimum: negotiationResult.offerHigherThanMinimum,
                profitsAndLooses: negotiationResult.profitsAndLooses.getFormatted()
            }
        );
        return negotiationResponse;
    };
};
