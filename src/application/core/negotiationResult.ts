import { ProfitsAndLooses } from "./profitsAndLooses";


export class NegotiationResult {
    level: number;
    minimumPrice: number;
    offerIsHigherThanMinimum: boolean;
    finalPrice: number;
    profitsAndLooses: ProfitsAndLooses;
    
    constructor(
        level: number, 
        minimumPrice: number, 
        offerIsHigherThanMinimum: boolean, 
        finalPrice: number, 
        profitsAndLooses: ProfitsAndLooses
    ) {
        this.level = level;
        this.minimumPrice = minimumPrice;
        this.offerIsHigherThanMinimum = offerIsHigherThanMinimum;
        this.finalPrice = finalPrice;
        this.profitsAndLooses = profitsAndLooses;
    };
};
