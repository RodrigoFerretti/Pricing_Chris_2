import { Seller } from "../../domain/seller";
import { SellerTable } from "../tables/sellerTable";
import { Repository } from "./abstract/repository";


export class SellerRepository extends Repository<Seller> {
    constructor() {
        const sellerMap: SellerTable = new SellerTable();
        super(sellerMap);
    };

    async getById(primaryKeys: Pick<Seller, SellerTable['primaryKeys'][number]>) {
        return await super.getById<SellerTable['primaryKeys']>(primaryKeys);
    };
};
