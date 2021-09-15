export class PNLResponse {
    revenue: string;
    expenses: string;
    expensesPercentage: string;
    profit: string;
    profitPercentage: string;

    constructor({revenue, expenses, expensesPercentage, profit, profitPercentage}: PNLResponse) {
        this.revenue = revenue;
        this.expenses = expenses;
        this.expensesPercentage = expensesPercentage;
        this.profit = profit;
        this.profitPercentage = profitPercentage;
    };
};
