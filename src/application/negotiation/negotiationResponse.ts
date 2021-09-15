import { PNLResponse } from "../pnl/pnlResponse";


export class NegotiationResponse {
    finalPrice: string;
    offerHigherThanMinimum: boolean;
    profitsAndLooses: PNLResponse;

    constructor({finalPrice, offerHigherThanMinimum, profitsAndLooses}: NegotiationResponse) {
        this.finalPrice = finalPrice;
        this.offerHigherThanMinimum = offerHigherThanMinimum;
        this.profitsAndLooses = profitsAndLooses;
    };
};
