import { Seller } from "../../domain/seller"
import { TableMap } from "../tableMap"


export class SellerMap implements TableMap<Seller> {
    nametableName = `seller`;
    columnsMap = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
