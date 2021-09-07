import { Repository, selectFilter } from "../iRepository";
import { Seller } from "../../domain/seller";
import { SellerMap } from "../../infra/mappers/entities/sellerMap";
import { Query } from "../../infra/database/query"
 

export class SellerRepository implements Repository<Seller> {
    private entityMap: SellerMap;

    constructor() {
        this.entityMap = new SellerMap();
    };

    public async getById(id: number) {
        const query: Query<Seller> = new Query<Seller>(this.entityMap).select().where({id: id});
        const seller: Seller = await query.first();
        return seller;
    };

    public async getFirst(filter: selectFilter<Seller>) {
        let query: Query<Seller> = new Query<Seller>(this.entityMap).select();
        if (filter.where != undefined) {
            query = query.where(filter.where);
        };
        if (filter.orderBy != undefined) {
            query = query.orderBy(filter.orderBy.key, filter.orderBy.sorting)
        };
        const seller: Seller = await query.first();
        return seller;
    };
};