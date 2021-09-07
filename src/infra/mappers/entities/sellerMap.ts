import { Seller } from "../../../domain/seller"
import { ITableMap } from "../iTableMap"


export class SellerMap implements ITableMap<Seller> {
    name = `seller`;
    columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
