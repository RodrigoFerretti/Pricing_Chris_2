import { Seller } from "../../domain/seller"
import { TableMap } from "./interfaces/TableMap"


export class SellerMap implements TableMap<Seller> {
    name = `seller`;
    columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
