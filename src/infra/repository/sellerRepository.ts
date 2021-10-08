import { Seller } from "../../domain/seller";
import { SellerMap } from "../mappers/sellerMap";
import { Repository } from "./abstract/repository";


export class SellerRepository extends Repository<Seller> {
    constructor() {
        const sellerMap: SellerMap = new SellerMap();
        super(sellerMap);
    };

    public async getById(primaryKeys: Pick<Seller, SellerMap['primaryKeys'][number]>) {
        return await super.getById<SellerMap['primaryKeys']>(primaryKeys);
    };
};
