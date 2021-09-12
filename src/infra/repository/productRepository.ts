import { Product } from "../../domain/product";
import { ProductMap } from "../mappers/productMap";
import { Repository } from "./abstract/repository";


export class ProductRepository extends Repository<Product, [`id`]> {
    constructor() {
        const productMap: ProductMap = new ProductMap();
        super(productMap);
    };
};
