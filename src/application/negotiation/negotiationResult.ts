import { ProfitsAndLooses } from "../pnl/profitsAndLooses";


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
};
