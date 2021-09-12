// import { Client } from "../domain/client";
// import { Product } from "../domain/product";
// import { Segment } from "../domain/segment";
// import { Seller } from "../domain/seller";
// import { Location } from "../domain/location";
// import { LocationPrice } from "../domain/locationPrice";
// import { City } from "../domain/city";
// import { CityPrice } from "../domain/cityPrice";
// import { State } from "../domain/state";
// import { StatePrice } from "../domain/statePrice";

// import { ExcludeMethods } from "../infra/types/excludeMethods";

// import { ProfitsAndLooses } from "./profitsAndLooses";

// import { NegotiationRequest } from "../infra/repository/negotiationRequest";


// export class Negotiation {
//     client: Client;
//     product: Product;
//     seller: Seller;
//     priceOffer: number;
//     segment: Segment;
//     address: NegotiationAddress;
//     prices: NegotiationPrices;
//     level: number;
//     minimumPrice: number;
//     offerIsHigherThanMinimum: boolean;
//     finalPrice: number;
//     monthlyProfitsAndLooses: ProfitsAndLooses;

//     constructor(negotiationRequest: ExcludeMethods<NegotiationRequest>, highestTPV: number) {
//         this.client = negotiationRequest.client;
//         this.product = negotiationRequest.product;
//         this.seller = negotiationRequest.seller;
//         this.priceOffer = negotiationRequest.priceOffer;
//         this.segment = negotiationRequest.segment;

//         this.address = new NegotiationAddress({
//             location: negotiationRequest.location,
//             city: negotiationRequest.city,
//             state: negotiationRequest.state,

//         });

//         this.prices = new NegotiationPrices({
//             locationPrice: negotiationRequest.locationPrice,
//             cityPrice: negotiationRequest.cityPrice,
//             statePrice: negotiationRequest.statePrice
//         });

//         this.level = this.getLevel(highestTPV);
//         this.minimumPrice = this.getMinimumPrice();
//         this.offerIsHigherThanMinimum = this.getPriceOfferIsHigherThanMinimum();
//         this.finalPrice = this.getFinalPrice();
//         this.monthlyProfitsAndLooses = this.getProfitsAndLooses();
//     };


//     private getLevel(highestTPV: number) {
//         const clientLevel: number = this.client.getLevel(highestTPV);
//         const level: number = (clientLevel > this.seller.type) ? clientLevel : this.seller.type;
//         return level;
//     };

//     private getMinimumPrice() {
//         const price: number = this.prices.getOrderedDescending()[this.level - 1];
//         return price;
//     };

//     private getPriceOfferIsHigherThanMinimum() {
//         const priceOfferIsHigherThatMinimum: boolean = (this.priceOffer > this.minimumPrice) ? true : false;
//         return priceOfferIsHigherThatMinimum;
//     };

//     private getFinalPrice() {
//         const finalPrice: number = (this.offerIsHigherThanMinimum) ? this.priceOffer : this.minimumPrice;
//         return finalPrice;
//     };

//     private getProductRevenue() {
//         let revenue: number;
//         if (this.product.id == 1) {
//             revenue = this.finalPrice * this.client.tpv / 10;
//         }
//         else if (this.product.id == 2) {
//             revenue = this.finalPrice / 10;
//         }
//         else {
//             revenue = this.finalPrice;
//         }
//         return revenue;
//     };


//     private getProfitsAndLooses() {
//         const revenue: number = this.getProductRevenue();
//         const expenses: number = (this.product.fabricationCosts / 10) 
//                                 + (this.prices.locationPrice.transportationPrice / 10) + (revenue * 0.1125)
//         const profit: number = revenue - expenses
//         const profitsAndLooses: ProfitsAndLooses = new ProfitsAndLooses(revenue, expenses, profit);
//         return profitsAndLooses;
//     }
// };


// export class NegotiationPrices {
//     locationPrice: LocationPrice;
//     cityPrice: CityPrice;
//     statePrice: StatePrice;

//     constructor(negotiationPrices: ExcludeMethods<NegotiationPrices>) {
//         this.locationPrice = negotiationPrices.locationPrice;
//         this.cityPrice = negotiationPrices.cityPrice;
//         this.statePrice = negotiationPrices.statePrice
//     };

//     public getOrderedDescending() {
//         const pricesOrderedDescending: number[] = [
//             this.locationPrice.price,
//             this.cityPrice.price,
//             this.statePrice.price
//         ].sort((a, b) => b - a);
//         return pricesOrderedDescending;
//     };
// };

// export class NegotiationAddress {
//     location: Location;
//     city: City;
//     state: State;

//     constructor(negotiationAddress: NegotiationAddress) {
//         this.location = negotiationAddress.location;
//         this.city = negotiationAddress.city;
//         this.state = negotiationAddress.state;
//     };
// };
