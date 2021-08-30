import { DbModel } from "../DbModel"


export class SellerModel extends DbModel {
    tableName = `seller`;
    columns!: {
        id: number,
        name: string,
        type: number
    };
};
