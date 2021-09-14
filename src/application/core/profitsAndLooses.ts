import { Product } from "../../domain/product";


export class ProfitsAndLooses {
    revenue: number;
    expenses: number;
    expensesPercentage: number;
    profit: number;
    profitPercentage;

    constructor(product: Product, revenue: number, transportationCosts: number) {
        this.revenue = revenue;
        this.expenses = (product.fabricationCosts / 10) + (transportationCosts / 10) + (revenue * 0.1125);
        this.expensesPercentage = this.expenses / revenue;
        this.profit = revenue - this.expenses;
        this.profitPercentage = this.profit / revenue;
    };
};
