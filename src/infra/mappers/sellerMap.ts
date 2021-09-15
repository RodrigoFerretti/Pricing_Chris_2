import { Seller } from "../../domain/seller"
import { iTableMap } from "./interfaces/iTableMap"


export class SellerMap implements iTableMap<Seller> {
    name= `seller`;
    columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
