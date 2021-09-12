import { Query } from "../database/query"
import { Seller } from "../../domain/seller";
import { SellerMap } from "../mappers/sellerMap";
import { Repository } from "./repository";


export class SellerRepository extends Repository<Seller, [`id`]> {
    constructor() {
        const sellerMap: SellerMap = new SellerMap();
        super(sellerMap);
    };
};
