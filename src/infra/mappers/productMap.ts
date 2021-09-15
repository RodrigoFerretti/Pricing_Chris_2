import { Product } from "../../domain/product"
import { iTableMap } from "./interfaces/iTableMap"


export class ProductMap implements iTableMap<Product> {
    name = `product`;
    columnsMap = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
};
