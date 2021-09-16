import { Seller } from "../../domain/seller"
import { iTableMap } from "./interfaces/iTableMap"


export class SellerMap implements iTableMap<Seller> {
    public name = `seller`;
    public columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
    static primaryKeys = [`id`] as const;
};
