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
    locationPrice: LocationPrice;
    city: City;
    cityPrice: CityPrice;
    state: State;
    statePrice: StatePrice;
    level!: number;
    minimumPrice!: number;
    offerIsProfitable!: number;
    finalPrice!: number;
    monthlyProfitsAndLooses!: ProfitsAndLooses;


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

export class ProfitsAndLooses {
    revenue: number;
    expenses: number;
    expensesPercentage: number;
    profit: number;
    profitPercentage: number;

    constructor(profitsAndLooses: ProfitsAndLooses) {
        this.revenue = profitsAndLooses.revenue;
        this.expenses = profitsAndLooses.expenses;
        this.expensesPercentage = profitsAndLooses.expensesPercentage;
        this.profit = profitsAndLooses.profit;
        this.profitPercentage = profitsAndLooses.profitPercentage;
    };
};
