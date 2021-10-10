import { Product } from "../../domain/product";
import { PNLResponse } from "./pnlResponse";


export class ProfitsAndLooses {
    revenue: number;
    expenses: number;
    expensesPercentage: number;
    profit: number;
    profitPercentage: number;

    constructor(product: Product, revenue: number, transportationCosts: number) {
        this.revenue = revenue;
        this.expenses = (product.fabricationCosts / 10) + (transportationCosts / 10) + (revenue * 0.1125);
        this.expensesPercentage = parseFloat(Number(this.expenses / revenue).toFixed(2));
        this.profit = revenue - this.expenses;
        this.profitPercentage = parseFloat(Number(this.profit / revenue).toFixed(2));
    };

    getFormatted() {
        const pnlFormatted: PNLResponse = new PNLResponse(
            {
                revenue: `R$ ${Number(this.revenue).toFixed(2).toString()}`,
                expenses: `R$ ${Number(this.expenses).toFixed(2).toString()}`,
                expensesPercentage: `${(this.expensesPercentage * 100).toString()}%`,
                profit: `R$ ${Number(this.profit).toFixed(2).toString()}`,
                profitPercentage: `${(this.profitPercentage * 100).toString()}%`
            }
        );
        return pnlFormatted;
    };
};
