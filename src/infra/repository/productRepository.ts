import { Product } from "../../domain/product";
import { ProductTable } from "../tables/productTable";
import { Repository } from "./abstract/repository";


export class ProductRepository extends Repository<Product> {
    constructor() {
        const productMap: ProductTable = new ProductTable();
        super(productMap);
    };

    async getById(primaryKeys: Pick<Product, ProductTable['primaryKeys'][number]>) {
        return await super.getById<ProductTable['primaryKeys']>(primaryKeys);
    };
};
