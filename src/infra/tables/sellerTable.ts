import { Seller } from "../../domain/seller"
import { iTable } from "./interfaces/iTable"


export class SellerTable implements iTable<Seller> {
    name = `seller`;
    columns = {
        id: `id`,
        name: `name`,
        type: `type`
    };
    primaryKeys = [`id`] as const;
};
