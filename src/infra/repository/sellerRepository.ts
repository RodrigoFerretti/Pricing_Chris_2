import { Seller } from "../../domain/seller";
import { SellerMap } from "../mappers/sellerMap";
import { Repository } from "./abstract/repository";


export class SellerRepository extends Repository<Seller, typeof SellerMap.primaryKeys> {
    constructor() {
        const sellerMap: SellerMap = new SellerMap();
        super(sellerMap);
    };
};
