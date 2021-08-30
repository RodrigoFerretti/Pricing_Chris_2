import { DbModel } from "../DbModel"


export class ProductModel extends DbModel {
    tableName = `product`;
    columns!: {
        id: number,
        name: string,
        fabrication_costs: number
    };
};
