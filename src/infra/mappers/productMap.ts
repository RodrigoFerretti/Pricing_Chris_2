import { Product } from "../../domain/product"
import { iTableMap } from "./interfaces/iTableMap"


export class ProductMap implements iTableMap<Product> {
    public name = `product`;
    public columnsMap = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
    static primaryKeys = [`id`] as const;
};
