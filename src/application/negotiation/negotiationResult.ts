import { ProfitsAndLooses } from "../pnl/profitsAndLooses";
import { NegotiationResponse } from "./negotiationResponse";

export class NegotiationResult {
    level: number;
    minimumPrice: number;
    offerHigherThanMinimum: boolean;
    finalPrice: number;
    profitsAndLooses: ProfitsAndLooses;
    
    constructor(
        level: number, 
        minimumPrice: number, 
        offerHigherThanMinimum: boolean, 
        finalPrice: number, 
        profitsAndLooses: ProfitsAndLooses
    ) {
        this.level = level;
        this.minimumPrice = minimumPrice;
        this.offerHigherThanMinimum = offerHigherThanMinimum;
        this.finalPrice = finalPrice;
        this.profitsAndLooses = profitsAndLooses;
    };

    getResponse() {
        const negotiationResponse: NegotiationResponse = new NegotiationResponse(
            {
                finalPrice: `R$ ${Number(this.finalPrice).toFixed(2)}`,
                offerHigherThanMinimum: this.offerHigherThanMinimum,
                profitsAndLooses: this.profitsAndLooses.getFormatted()
            }
        );
        return negotiationResponse;
    };
};
