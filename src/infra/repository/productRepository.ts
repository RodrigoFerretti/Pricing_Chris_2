import { Product } from "../../domain/product";
import { ProductMap } from "../mappers/productMap";
import { Repository } from "./abstract/repository";


export class ProductRepository extends Repository<Product> {
    constructor() {
        const productMap: ProductMap = new ProductMap();
        super(productMap);
    };

    public async getById(primaryKeys: Pick<Product, ProductMap['primaryKeys'][number]>) {
        return await super.getById<ProductMap['primaryKeys']>(primaryKeys);
    };
};
