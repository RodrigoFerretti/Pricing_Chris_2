import { Seller } from "../../domain/seller"
import { TableMap } from "./interfaces/TableMap"
import { columnsMap } from "./interfaces/TableMap"


export class SellerMap implements TableMap<Seller> {
    name: string = `seller`;
    primaryKeys: (keyof Seller)[] =  [`id`];
    columnsMap: columnsMap<Seller> = {
        id: `id`,
        name: `name`,
        type: `type`
    };
};
