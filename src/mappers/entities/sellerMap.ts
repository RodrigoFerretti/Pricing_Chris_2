import { Seller } from "../../domain/seller"
import { DatabaseTableMap } from "../tableMap"


export class SellerMap implements DatabaseTableMap<Seller> {
    tableName = `seller`;
    columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
