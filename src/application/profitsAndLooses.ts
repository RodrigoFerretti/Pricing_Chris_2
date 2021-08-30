export class ProfitsAndLooses {
    revenue: number;
    expenses: number;
    expensesPercentage: number;
    profit: number;
    profitPercentage: number;

    constructor(revenue: number, expenses: number, profit: number) {
        this.revenue = revenue;
        this.expenses = expenses;
        this.expensesPercentage = expenses / revenue;
        this.profit = profit;
        this.profitPercentage = profit / revenue;
    };
};
